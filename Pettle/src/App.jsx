import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AppHome from './Pages/AppHome';
import Pet from './Pages/Pet';
import Disco from './Pages/Disco';
import Store from './Pages/Store';
import Classroom from './Pages/Classroom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<AppHome />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/disco" element={<Disco />} />
        <Route path="/store" element={<Store />} />
        <Route path="/classroom" element={<Classroom />} />
      </Routes>
    </Router>
  );
}

export default App;
