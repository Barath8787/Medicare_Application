// src/pages/dashboard/Dashboard.js

import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import './Dashboard.css';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email);
      } else {
        navigate('/login');
      }
    };
    getUser();
  }, [navigate]);

  return (
    <div className='mediacare_hero'>
      <FontAwesomeIcon icon={faRegularHeart} className="icon heart-icon" />
      <h1>Welcome to MediCare Companion</h1>
      <p>Your trusted partner in medication management. Choose your role to get started with personalized features.</p>
      <div className="customers">
        <div className="patient">
          <FontAwesomeIcon icon={faUser} className='icon patient-icon' />
          <h1 className='heading'>I'm a Patient</h1>
          <p>Track your medication schedule and maintain your health records</p>
          <ul>
            <li>Mark medications as taken</li>
            <li>Upload proof photos (optional)</li>
            <li>View your medication calendar</li>
            <li>Large, easy-to-use interface</li>
          </ul>
          <Link to="/patient">
            <button>Continue as Patient</button>
          </Link>
        </div>

        <div className="caretaker">
          <FontAwesomeIcon icon={faUsers} className='icon caretaker-icon' />
          <h1 className='heading'>I'm a Caretaker</h1>
          <p>Monitor and support your loved one's medication adherence</p>
          <ul>
            <li>Monitor medication compliance</li>
            <li>Set up notification preferences</li>
            <li>View detailed reports</li>
            <li>Receive email alerts</li>
          </ul>
          <Link to="/caretaker">
            <button>Continue as Caretaker</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
  