// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export function useAuth() {
  return useContext(AuthContext);
}