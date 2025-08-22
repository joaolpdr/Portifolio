import express from 'express';
import cors from 'cors'; 
import routes from './routes.js';

const app = express();
const PORT = 3333;

app.use(cors()); // Diz ao Express para usar o cors (DEVE vir antes das rotas)
app.use(express.json()); 
app.use(routes); 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
