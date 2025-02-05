import React, { useState } from 'react';
import { safeCredentialsFormData, handleErrors } from './utils/fetchHelper';

const Layout = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.set('username', username);
    formData.set('password', password);

    // Perform the login fetch request here
    fetch('/api/login', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the login response from the backend
      })
      .catch(error => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.set('username', username);
    formData.set('email', email);
    formData.set('password', password);

    // Perform the sign-up fetch request here
    fetch('/api/signup', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the sign-up response from the backend
      })
      .catch(error => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  };

  return (
    <React.Fragment>
      {/* Existing JSX code */}
      {/* ... */}

      {/* Log-in form */}
      <div className="log-in col-xs-4 col-xs-offset-1">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              className="form-control username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group col-xs-8">
            <input
              type="password"
              className="form-control password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            id="log-in-btn"
            className="btn btn-default btn-primary col-xs-3 col-xs-offset-1"
            type="submit"
          >
            Log in
          </button>
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
            <span> &#183; </span>
          </label>
          <a href="#">Forgot password?</a>
        </form>
      </div>

      {/* Sign-up form */}
      <div className="sign-up col-xs-4 col-xs-offset-1">
        <form onSubmit={handleSignUp}>
          {/* Form fields */}
        </form>
      </div>

      {/* Remaining JSX code */}
      {/* ... */}
    </React.Fragment>
  );
};

export default Layout;