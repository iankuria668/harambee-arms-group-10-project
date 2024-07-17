import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5555/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          onLogin(data);
          navigate('/');  // Redirect to home after successful login
        } else {
          alert('Login failed');
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Welcome to Harambee Arms</h2>
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup" onClick={() => console.log('Navigating to signup')}>Sign Up</Link></p>

    </div>
  );
}

export default Login;
