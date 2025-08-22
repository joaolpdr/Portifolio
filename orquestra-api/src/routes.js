import { Router } from 'express';
import UserController from './controllers/UserController.js';
import SessionController from './controllers/SessionController.js';
import authMiddleware from './middlewares/auth.js';
import BoardController from './controllers/BoardController.js';
import TaskController from './controllers/TaskController.js'; // 1. Importa o TaskController

const routes = new Router();

// Rotas Públicas
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Rotas Privadas 
routes.use(authMiddleware);

// Rotas de Quadros (Boards)
routes.post('/boards', BoardController.store);
routes.get('/boards', BoardController.index);

// Rotas de Tarefas (Tasks) // boardId é um parâmetro que pegamos na URL

routes.post('/boards/:boardId/tasks', TaskController.store);

export default routes;
