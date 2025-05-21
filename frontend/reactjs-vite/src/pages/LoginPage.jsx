import React from 'react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div>
        <h1>LoginPage</h1>
        <LoginForm />
    </div>
  )
}

export default LoginPage