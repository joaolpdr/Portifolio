import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class BoardController {
  // Método para criar um novo quadro
  async store(request, response) {
    try {
      const { title } = request.body;
      const userId = request.userId; //vem de middleware de autenticação

      // Validação para garantir que o título foi enviado
      if (!title) {
        return response.status(400).json({ error: 'O título é obrigatório.' });
      }

      const board = await prisma.board.create({
        data: {
          title,
          userId, // Associa o quadro ao usuário logado
        },
      });

      return response.status(201).json(board);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Não foi possível criar o quadro.' });
    }
  }

  // Método para listar os quadros do usuário logado
  async index(request, response) {
    try {
      const userId = request.userId;

      const boards = await prisma.board.findMany({
        where: {
          userId: userId,
        },
        // Ordena os quadros pelo mais recente
        orderBy: {
          createdAt: 'desc',
        }
      });

      return response.json(boards);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Não foi possível listar os quadros.' });
    }
  }
}

export default new BoardController();
