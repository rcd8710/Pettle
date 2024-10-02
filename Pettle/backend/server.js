const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { Pool } = require('pg'); 
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const http = require("http");
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
io.on('connection', (socket) => {
  // User connects to the socket
  
  console.log(`User Connected: ${socket.id}`);
  //Console logs that a user has been connected
  socket.on('join-class', async (data) => {
    //One of the components has emitted socket join class
    try {
      //What does the async mean? It means that when the socket is getting the data in this case, it allows other tasks to be preformed, its like sending
      //Someone to go get something and going to do chores while you wait for them to come back.

      //Here await stops the execution of the join-class allows other processes to complete while fetching the codeVal from the database 
      const classcodeFind = await pool.query(
        'SELECT * FROM public.pettle_db WHERE classcode = $1',
        [data.codeVal]
      );
      //This is not necessarily needed as there should only be one instance of the speciifc codeval or none but adds an extra layer of security
      const classcodeFindResult = classcodeFind.rows[0];
      if (!classcodeFindResult) {
        console.log("Code does not exist");
        socket.emit("classcode-not-found");
        return;
      }
      //The room should be declared as the roomCode *IMPORTANT* keep track of all the rooms by having a table of all the room codes
      const room = data.codeVal;
      socket.join(room);
      console.log(`User ${socket.id} joined room: ${room}`);
      //The user has been added to the room, they have been checked based on class code.
      //Now they have to be added into the postgresql database 
      const role = "student";
      //The role student should already be known since right now the only way to get in through class code is by being a student
      try {
        //Check for the students user name
        const stuUserResult = await pool.query(
          'SELECT * FROM public.pettle_db WHERE username = $1',
          [data.loginVal]
        );

        if (stuUserResult.rows.length > 0) {
          socket.emit("student-exist");
        }
        //If the student doesnt exist, then it is addable, else tell the user that user is already in the room, and they need to login 
        else {
          const stuidsResult = await pool.query(
            'SELECT stuid FROM public.pettle_db'
          );
          //Get every id from the database and find set newCOunt to the greatest value
          const stuids = stuidsResult.rows.map(row => row.stuid);
          const newCount = stuids.length > 0 ? Math.max(...stuids) + 1 : 1;
          
          await pool.query(
            //Add the new student's id to the database, now about all the data for the student will have been added.
            'INSERT INTO public.pettle_db (username, role, stuid) VALUES ($1, $2, $3)',
            [data.loginVal, role, newCount]
          );
          console.log("Student added with ID:", newCount);
          console.log("give-stu work")
          //Allow the student to join in the frontend
          socket.emit("student-join");

          // Update student count after adding a new student
          socket.emit("count-students", { count: newCount });
        }
      } catch (error) {
        console.error('Error checking username:', error);
      }
    } catch (error) {
      console.error('Error handling join-class:', error);
    }
  });
  //This is for when the classroom page needs to update the amount of students
  socket.on('add-students', async () => {
    try {
      const getCountResults = await pool.query(
        'SELECT COUNT(*) AS count FROM public.pettle_db WHERE role = $1',
        ['student']
      );
      const studentCount = getCountResults.rows[0].count;
      socket.emit("count-students", { count: studentCount });
    } catch (error) {
      console.error('Error fetching student count:', error);
    }
  });
  //This is for when the Animal componenet needs to get the assign the id an animal
  socket.on('give-stuid', async () => {
    try {
      const getStuidResults = await pool.query(
        'SELECT COUNT(*) AS count FROM public.pettle_db WHERE role = $1',
        ['student']
      );
      const myStuid = getStuidResults.rows[0].count;
      socket.emit("stuid-give", { count: myStuid });
    } catch (error) {
      console.error('Error fetching student id:', error);
    }
  })

 // socket.on('send-disco-message'),  async(data) => {
  //  io.to(room).emit(data)
  // }
});
//The connections between the database and server
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'rdas0095',
  port: 5173,  // Correct port for PostgreSQL
});

const JWT_SECRET = '1239912038120837812731';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'waterfire095@gmail.com',
    pass: 'zlcc wnag vwip ugql',
  },
});

function makeCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}


app.post('/check-email', async (req, res) => {
  const { emailVal } = req.body;

  if (!emailVal) {
    return res.status(400).send('Email is required');
  }

  try {
    const result1 = await pool.query(
      'SELECT * FROM public.pettle_db WHERE email = $1',
      [emailVal]
    );

    if (result1.rows.length > 0) {
      // Email exists
      res.status(404).send('Email already in use');
    } else {
      // Email does not exist
      res.status(200).send('Email Verification Sent');
    }
  } catch (error) {
    res.status(500).send('Error checking email');
  }
});

app.post('/check-username', async (req, res) => {
  const { loginVal } = req.body;

  if (!loginVal) {
    return res.status(400).send('Username is required');
  }

  try {
    const userResult = await pool.query(
      'SELECT * FROM public.pettle_db WHERE username = $1',
      [loginVal]
    );

    if (userResult.rows.length > 0) {
      return res.status(404).send('Username already in use');
    } else {
      return res.status(200).send('Valid Username');
    }
  } catch (error) {
    console.error('Error checking username:', error);
    return res.status(500).send('Error checking username');
  }
});


app.post('/send-verification-email', async (req, res) => {
  const { emailVal, passwordVal, loginVal } = req.body;
  console.log(req.body)
  
  if (!emailVal || !passwordVal || !loginVal) {
    return res.status(400).send('All fields are required');
  }
  const classCode = makeCode()
  const token = jwt.sign({ email: emailVal, login: loginVal, password:passwordVal, classCode: classCode}, JWT_SECRET, { expiresIn: '1h' });
  const verificationUrl = `http://localhost:3002/verify-email?token=${token}`;
  
  const mailOptions = {
    from: 'waterfire095@gmail.com',
    to: emailVal,
    subject: 'Email Verification',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="color: #4CAF50;">Welcome to Pettle!</h1>
         <img src="https://media.giphy.com/media/25688FI5AUUVf04upZ/giphy.gif" style="width: 100%; max-width: 200px; display: block; margin: 20px 0;">
        <p style="font-size: 16px;">
          We're thrilled to have you as part of our community. Whether you're here to explore, connect, or simply enjoy the journey, we're here to make sure you have a fantastic experience.
        </p>
        <p style="font-size: 18px; font-weight: bold;">
          <a href="${verificationUrl}" style="color: #2196F3; text-decoration: none;">Click here to verify your email</a>
        </p>
        <p style="font-size: 16px;">
          The code for your class is <strong style="font-size: 18px; color: #FF5722;">${classCode}</strong>. Students will be able to log in by entering this code after selecting the student option.
        </p>
        <p style="font-size: 16px;">
          If you have any questions or need assistance, don't hesitate to reach out. We're here to help!
        </p>
        <p style="font-size: 16px; color: #777;">
          Warm regards,<br/>
          The Pettle Team
        </p>
      </div>
    `,
  };
   

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Verification email sent');
  });
});

app.get('/verify-email', async (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).send('Token is required');
  }

  jwt.verify(token, JWT_SECRET, async (error, decoded) => {
    if (error) {
      return res.status(400).send('Invalid or expired token');
    }
    // If the token is valid, send a success response
    
    // Hash the password before saving

    const { email, password, login, classCode } = decoded;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(decoded)
  
  try {
    // Save user to the database
    const emailresult = await pool.query('SELECT * FROM public.pettle_db WHERE email = $1', [email]);
    const emailuser = emailresult.rows[0];
    const role = "Teacher"
    if(!emailuser){
    await pool.query(
      'INSERT INTO public.pettle_db (email, password, username, classcode, role) VALUES ($1, $2, $3, $4, $5)',
      [email, hashedPassword, login, classCode, role]
    );
  }
  } catch (dbError) {
    console.error('Error saving user:', dbError);
    return res.status(500).send('Error saving user');
  }
 
  });
  res.status(200).send('Email verified successfully');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  try {
    // Check if the user exists in the database
    const result = await pool.query('SELECT * FROM public.pettle_db WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      console.log("!Match")
      return res.status(401).send('Invalid username or password');
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      console.log("Match")
      return res.status(200).send('Login successful');
    } else {
      return res.status(401).send('Invalid username or password');
    }
  } catch (dbError) {
    console.error('Error checking user:', dbError);
    return res.status(500).send('Error checking user');
  }
});


     
app.post('/send-code', async (req, res) => {
  const { emailVal } = req.body;
  console.log(req.body)
  try {
    const result2 = await pool.query(
      'SELECT * FROM public.pettle_db WHERE email = $1',
      [emailVal]
    );
    const emailExists = result2.rows[0];
    if(!emailExists) {
      console.log("email does not exist")
    }
    else {
      const codeVal = makeCode();

      // Update the user's record with the code
      await pool.query(
        'UPDATE public.pettle_db SET passwordresetcode = $1 WHERE email = $2',
        
        [codeVal, emailVal]
      );

      const mailOptions = {
        from: 'waterfire095@gmail.com',
        to: emailVal,
        subject: 'Reset Code',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h1 style="color: #4CAF50;">Your reset code is: <strong>${codeVal}</strong></h1>
          </div>
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Reset Code Sent');
      });
    } 
  }
    catch (error) {
    res.status(500).send('Error processing request');
  }
});

app.post('/verify-code', async (req, res) => {
  const {codeVal, passwordVal} = req.body
  

try {
  const codeFind = await pool.query(
    'SELECT * FROM public.pettle_db WHERE passwordresetcode = $1',
    
    [codeVal]
  );
  const codeExists = codeFind.rows[0]
  if(!codeExists){
    console.log("code does not exist")
  }
  const newHashedPassword = await bcrypt.hash(passwordVal, 10);
  await pool.query(
  'UPDATE public.pettle_db SET password = $1 WHERE passwordresetcode = $2',
        
      [newHashedPassword, codeVal]
  )
  res.status(200).send('Password updated successfully');
}

catch(error){
  console.error('Error updating password:', error);
  res.status(500).send('Error updating password please check if the code is correct');
}
})
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
io.listen(5001);

module.exports = pool;
