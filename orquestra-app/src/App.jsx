import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BoardView from './pages/BoardView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      
       {/* Rotas Privadas */}
      <Route
        path="/dashboard"
        element={<PrivateRoute><Dashboard /></PrivateRoute>}
      />
      <Route
        path="/board/:boardId"
        element={<PrivateRoute><BoardView /></PrivateRoute>}
      />
    </Routes>
  );
}

export default App;