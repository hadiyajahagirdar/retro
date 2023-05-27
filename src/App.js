

import React, { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are mandatory');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password do not match');
      return;
    }

    setErrorMessage('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsLoggedIn(false);
  };

  const renderSignUpForm = () => {
    return (
      <div className='sign'>
        <h2>Sign Up</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    );
  };

  const renderProfile = () => {
    return (
      <div className='profi'>
        <h2>Profile</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  return (
    <div>
      <nav className='navi'>
        <ul>
          {/* <li>
            <button onClick={() => setIsLoggedIn(false)}>Header</button>
          </li> */}
          <li>
            <button onClick={() => setIsLoggedIn(false)}>Signup</button>
          
            <button onClick={() => setIsLoggedIn(true)}>Profile</button>
          </li>
        </ul>
      </nav>

      {isLoggedIn ? renderProfile() : renderSignUpForm()}
    </div>
  );
}

export default App;
