// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; // <-- make sure this is imported
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Patient from './Pages/Patient/Patient';
import Caretaker from './Pages/Caretaker/Caretaker';
import Overview from './Pages/Caretaker/overview/overview';
import Activity from './Pages/Caretaker/Activity/Activity';
import Calender from './Pages/Caretaker/CalendenView/Calender';
import Notification from './Pages/Caretaker/Notification/Notification';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        
        <Route path="/caretaker" element={<Caretaker />} >

          <Route path="overview" element={<Overview />} />
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="activity" element={<Activity/>} />
          <Route path="Calender" element={<Calender/>} />
          <Route path="Notification" element={<Notification/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
