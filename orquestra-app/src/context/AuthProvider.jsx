import React, { useState, useEffect } from 'react';
import { AuthContext } from './authContext'; // 1. Importa o context do ficheiro correto
import api from '../services/api';

export function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Orquestra:token');
    const user = localStorage.getItem('@Orquestra:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const login = async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });
    const { token, user } = response.data;

    localStorage.setItem('@Orquestra:token', token);
    localStorage.setItem('@Orquestra:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  };

  const logout = () => {
    localStorage.removeItem('@Orquestra:token');
    localStorage.removeItem('@Orquestra:user');
    setData({});
  };

  // 2. Usamos o AuthContext importado para fornecer o valor
  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
