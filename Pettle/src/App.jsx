import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AppHome from './Pages/AppHome';
import Pet from './Pages/Pet';
import Disco from './Pages/Disco';
import Store from './Pages/Store';
import Classroom from './Pages/Classroom';
import VerifyEmail from './Pages/VerifyEmail';
import English from './Pages/English';
import Math from './Pages/Math';
import Science from './Pages/Science';
import History from './Pages/History';
import Health from './Pages/Health';
import BeginnerStudentPage from './Pages/BeginnerPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/beg-page" element={<BeginnerStudentPage />} />
        <Route path="/home" element={<AppHome />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/disco" element={<Disco />} />
        <Route path="/store" element={<Store />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/english" element={<English />} />
        <Route path="/math" element={<Math/>} />
        <Route path="/science" element={<Science/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/health" element={<Health/>} />
      </Routes>
    </Router>
  );
}

export default App;
