import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

class SessionController {
  // Método para autenticar um utilizador (criar uma sessão)
  async store(request, response) {
    try {
      const { email, password } = request.body;

      // Procura o utilizador pelo e-mail fornecido
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // Se o utilizador não for encontrado, retorna um erro
      if (!user) {
        return response.status(401).json({ error: 'Credenciais inválidas.' });
      }

      // Compara a senha enviada com a senha criptografada no banco
      const passwordMatch = await compare(password, user.password);

      // Se as senhas não baterem, retorna um erro
      if (!passwordMatch) {
        return response.status(401).json({ error: 'Credenciais inválidas.' });
      }

      // Se tudo estiver correto, gera o Token JWT
      const token = jwt.sign(
        { id: user.id },
        'seuSegredoSuperSecreto',
        { expiresIn: '1d' }
      );

      // Retorna os dados do utilizador e o token
      const { password: _, ...userWithoutPassword } = user;
      return response.json({ user: userWithoutPassword, token });

    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Falha na autenticação.' });
    }
  }
}

export default new SessionController();
