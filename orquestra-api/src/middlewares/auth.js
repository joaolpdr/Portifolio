import jwt from 'jsonwebtoken';
import { promisify } from 'util';

// O segredo do nosso token, o mesmo usado no SessionController
const authConfig = {
  secret: 'seuSegredoSuperSecreto',
};

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  // 1. Verifica se o token foi enviado
  if (!authHeader) {
    return response.status(401).json({ error: 'Token não fornecido.' });
  }

  // 2. Divide o header para pegar apenas o token (formato "Bearer TOKEN...")
  const [, token] = authHeader.split(' ');

  try {
    // 3. Valida o token usando o segredo
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // 4. Se o token for válido, adiciona o ID do usuário na requisição
    // para que as próximas rotas saibam quem está logado.
    request.userId = decoded.id;

    // 5. Libera a requisição para continuar para o próximo passo (o controller)
    return next();
  } catch (err) {
    // 6. Se o token for inválido, barra a requisição
    return response.status(401).json({ error: 'Token inválido.' });
  }
};
