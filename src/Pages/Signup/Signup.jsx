// src/pages/Signup.js
import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Signup.css'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else navigate('/dashboard');
  };

  return (
    <div  className='signup-form'>
      <h2>Signup</h2>
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup} className='signup-btn'>Sign Up</button>
      <p className='advice'>Alreday,have a account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
