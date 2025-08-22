import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

class SessionController {
  // Método para autenticar um usuário (criar uma sessão)
  async store(request, response) {
    try {
      const { email, password } = request.body;

      // Procura o usuário pelo e-mail fornecido
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // Se o usuário não for encontrado, retorna essa mensagem
      if (!user) {
        return response.status(404).json({ error: 'Usuário não encontrado.' });
      }

      // Compara a senha enviada com a senha criptografada no banco
      const passwordMatch = await compare(password, user.password);

      // Se as senhas не baterem, retorna um erro
      if (!passwordMatch) {
        return response.status(401).json({ error: 'Senha incorreta.' });
      }

      // gera o Token
      const token = jwt.sign(
        { id: user.id }, // O que vai guardar no token (payload)
        'seuSegredoSuperSecreto', // A senha para assinar o token
        { expiresIn: '1d' } // tempo de expiração
      );

      // Retorna os dados do usuário e o token
      const { password: _, ...userWithoutPassword } = user;
      return response.json({ user: userWithoutPassword, token });

    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Falha na autenticação.' });
    }
  }
}

export default new SessionController();
