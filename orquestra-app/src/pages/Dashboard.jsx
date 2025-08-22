import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import api from '../services/api';
import { Link } from 'react-router-dom'; // 1. Importa o componente Link

function Dashboard() {
  const { user, logout } = useAuth();
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newBoardTitle, setNewBoardTitle] = useState('');

  useEffect(() => {
    async function fetchBoards() {
      try {
        const response = await api.get('/boards');
        setBoards(response.data);
      } catch (error) {
        console.error("Não foi possível buscar os quadros:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBoards();
  }, []);

  async function handleCreateBoard(e) {
    e.preventDefault();
    if (!newBoardTitle.trim()) return;
    try {
      const response = await api.post('/boards', { title: newBoardTitle });
      setBoards([response.data, ...boards]);
      setNewBoardTitle('');
    } catch (error) {
      console.error("Não foi possível criar o quadro:", error);
    }
  }

  if (loading) {
    return <div className="p-8">A carregar quadros...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Bem-vindo, {user?.name}!</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">Sair</button>
      </header>

      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Meus Quadros</h2>
          <form onSubmit={handleCreateBoard} className="bg-white p-4 rounded-lg shadow-md mb-8 flex gap-4">
            <input 
              type="text"
              value={newBoardTitle}
              onChange={(e) => setNewBoardTitle(e.target.value)}
              placeholder="Nome do novo quadro"
              className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Criar</button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boards.length > 0 ? (
              boards.map(board => (
                <Link to={`/board/${board.id}`} key={board.id} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-800">{board.title}</h3>
                </Link>
              ))
            ) : (
              <p className="text-gray-500">Você ainda não tem quadros. Crie um acima!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;