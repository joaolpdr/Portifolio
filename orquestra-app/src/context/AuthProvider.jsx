import React, { useState, createContext } from 'react';
import api from '../services/api'; // 1. Importa a nossa instância configurada do Axios

// Exportamos o Context para que o useAuth possa usá-lo
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // Inicializamos o estado com os dados do localStorage para manter o login
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Orquestra:token');
    const user = localStorage.getItem('@Orquestra:user');

    if (token && user) {
      // Adicionamos o token aos cabeçalhos do axios em todas as requisições futuras
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  // A função de login agora está centralizada e CORRETA
  const login = async ({ email, password }) => {
    // 2. Chama o endpoint correto: /sessions
    const response = await api.post('/sessions', { email, password });
    const { token, user } = response.data;

    // 3. Usa as chaves corretas para o localStorage
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

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
