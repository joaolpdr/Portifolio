import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

// Inicializa o Prisma Client para que possamos falar com o banco de dados
const prisma = new PrismaClient();

class UserController {
  // Método para criar (armazenar) um novo usuário
  async store(request, response) {
    try {
      // 1. Pega os dados do corpo da requisição
      const { name, email, password } = request.body;

      // 2. Verifica se um usuário com este email já existe
      const userExists = await prisma.user.findUnique({
        where: { email },
      });

      if (userExists) {
        return response.status(400).json({ error: 'Este e-mail já está em uso.' });
      }

      // 3. Criptografa a senha antes de salvar
      const hashedPassword = await hash(password, 8);

      // 4. Usa o Prisma para criar o usuário no banco de dados
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      // 5. Retorna o usuário criado (sem a senha)
      const { password: _, ...userWithoutPassword } = user;
      return response.status(201).json(userWithoutPassword);

    } catch (error) {
      // Se algo der errado, retorna um erro genérico
      console.error(error); // Loga o erro no terminal para depuração
      return response.status(500).json({ error: 'Não foi possível criar o usuário.' });
    }
  }
}

export default new UserController();
