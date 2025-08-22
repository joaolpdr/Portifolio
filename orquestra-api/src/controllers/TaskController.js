import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TaskController {
  // Método para criar uma nova tarefa dentro de um quadro
  async store(request, response) {
    try {
      const { boardId } = request.params; // Pega o ID do quadro pela URL
      const { title, description } = request.body;
      const userId = request.userId; // Pega o ID do usuário logado (do middleware)

      // Verifica se o quadro pertence ao usuário logado
      const board = await prisma.board.findFirst({
        where: {
          id: boardId,
          userId: userId,
        },
      });

      // Se não encontrar o quadro (ou não pertencer ao usuário), retorna erro
      if (!board) {
        return response.status(404).json({ error: 'Quadro não encontrado.' });
      }

      // Cria a tarefa, associando-a ao boardId
      const task = await prisma.task.create({
        data: {
          title,
          description,
          boardId,
        },
      });

      return response.status(201).json(task);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Não foi possível criar a tarefa.' });
    }
  }
}

export default new TaskController();
