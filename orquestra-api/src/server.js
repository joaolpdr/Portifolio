import express from 'express';
import routes from './routes.js'; // Importa nossas rotas

const app = express();
const PORT = 3333;

// Habilita o Express para entender requisições em JSON
app.use(express.json()); 

// Diz para a aplicação usar as rotas que criamos
app.use(routes); 

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
