import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup({ onSignup }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wallet, setWallet] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (!name || !username || !password || !wallet) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5555/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, username, password, wallet }),
            });

            if (response.ok) {
                const data = await response.json();
                onSignup(data.user, data.access_token);  
                navigate('/');  
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }
        } catch (error) {
            setError(error.message);  
        }
    };

    return (
        <div className="signup-container">
          <h1>Harambee Arms</h1>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="show-password-button"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <div>
                    <label htmlFor="wallet">Wallet:</label>
                    <input
                        type="number"
                        id="wallet"
                        value={wallet}
                        onChange={(e) => setWallet(e.target.value)}
                        placeholder="Wallet"
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Signup;
