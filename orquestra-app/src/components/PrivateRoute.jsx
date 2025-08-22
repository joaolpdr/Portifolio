import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  // Pegamos o 'user' do nosso contexto de autenticação.
  // Se o objeto 'user' existir, significa que o utilizador está autenticado.
  const { user } = useAuth();

  // Se houver um utilizador, mostramos a página protegida (o 'children').
  // Caso contrário, redirecionamos de volta para a página de login.
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;