import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Games from '../src/Pages/Games';
import Developers from './Pages/Developers';
import QA from '../src/Pages/QA';
import DevLogs from './Pages/DevLogs';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/Qa" element={<QA />} />
        <Route path="/DevLogs" element={<DevLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;