import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AppHome from './AppHome';
import Pet from './Pet';
import Disco from './Disco';
import Store from './Store';
import Classroom from './Classroom';

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
