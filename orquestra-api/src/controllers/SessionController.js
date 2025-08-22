// src/controllers/SessionController.js
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

class SessionController {
  async store(request, response) {
    try {
      const { email, password } = request.body;
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return response.status(404).json({ error: 'Usuário não encontrado.' });
      }

      console.log('Senha enviada:', password);
      console.log('Senha do banco (hash):', user.password);

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return response.status(401).json({ error: 'Senha incorreta.' });
      }

      // ... o restante do código
    } catch (error) {
      // ...
    }
  }
}

export default new SessionController();