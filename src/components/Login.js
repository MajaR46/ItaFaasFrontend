import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 
    try {
      console.log('Sending login request', { username, password });
      const response = await api.post('/login', { username, password });
      console.log('Login response', response);
      localStorage.setItem('token', response.data.token);
      navigate('/tickets');
    } catch (error) {
      console.error('Login error', error);
      if (error.response) {

        setError(error.response.data.message || 'Invalid credentials');
      } else if (error.request) {
        setError('No response from server');
      } else {
        setError('Login failed');
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton"type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
