import React from 'react';
import '../styles/AuthPage.css';

const SignupPage = () => {
  return (
    <div className="auth-page">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
