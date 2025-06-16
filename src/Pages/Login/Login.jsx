// src/pages/Login.js
import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

// import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else navigate('/dashboard');
  };

  return (
    <div className='signup-form'>
      <h2>Login</h2>
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin} className='signup-btn'>Log In</button>
      <p className='advice'>you doesn't have a account? <Link to="/">Sign</Link></p>
      
    </div>
  );
};

export default Login;
