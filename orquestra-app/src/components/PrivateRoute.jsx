// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // O caminho corrigido

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;