import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BoardView() {
  // O hook useParams permite-nos ler os parâmetros da URL, como o ID do quadro
  const { boardId } = useParams();

  return (
    <div className="p-8">
      <Link to="/dashboard" className="text-blue-600 hover:underline mb-6 block">
        &larr; Voltar para os meus quadros
      </Link>
      <h1 className="text-3xl font-bold">Visualização do Quadro</h1>
      <p className="mt-2 text-gray-600">O ID deste quadro é: {boardId}</p>

      {}
    </div>
  );
}

export default BoardView;

