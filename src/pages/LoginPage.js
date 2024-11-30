import React from 'react';
import '../styles/AuthPage.css';

const LoginPage = () => {
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;