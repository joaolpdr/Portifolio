Orquestra 🎵
Orquestra é um sistema de gestão de projetos e tarefas colaborativo, inspirado em ferramentas como Trello e Asana. O objetivo é fornecer uma plataforma intuitiva para organizar fluxos de trabalho, acompanhar o progresso de tarefas e facilitar a colaboração em equipa.

Este projeto foi construído como um estudo de caso completo de uma aplicação Full-Stack, abrangendo desde a modelagem do banco de dados e a criação de uma API RESTful segura até o desenvolvimento de uma interface de utilizador reativa e moderna.

✨ Funcionalidades (Backend)
Atualmente, a API do Orquestra suporta as seguintes funcionalidades:

Autenticação de Utilizadores:

Registo de novos utilizadores com senhas criptografadas.

Login com sistema de autenticação via Token JWT.

Gestão de Quadros (Boards):

Criação de novos quadros por utilizadores autenticados.

Listagem de todos os quadros pertencentes ao utilizador logado.

Gestão de Tarefas (Tasks):

Criação de novas tarefas dentro de um quadro específico.

Validação para garantir que apenas o dono do quadro pode adicionar tarefas.

Segurança:

Middleware de autenticação para proteger rotas privadas.

🚀 Tecnologias Utilizadas
Este projeto é dividido em duas partes principais: o backend e o frontend.

Backend (orquestra-api):

Runtime: Node.js

Framework: Express.js

Banco de Dados: PostgreSQL

ORM: Prisma

Autenticação: JWT (JSON Web Tokens) & bcryptjs

Ambiente de Desenvolvimento: Nodemon & Sucrase

Frontend (orquestra-app):

Biblioteca: React

Build Tool: Vite

Estilização: Tailwind CSS

Cliente HTTP: Axios

⚙️ Como Executar o Projeto Localmente
Para executar o projeto na sua máquina, siga os passos abaixo.

Pré-requisitos
Node.js (versão LTS recomendada)

PostgreSQL instalado e a correr

Um gestor de pacotes como npm ou yarn

1. Configuração do Backend (orquestra-api)
# Navegue para a pasta da API
cd orquestra-api

# Instale as dependências
npm install

# Crie uma cópia do arquivo de ambiente
cp .env.example .env

Abra o arquivo .env e configure a variável DATABASE_URL com as suas credenciais do PostgreSQL.

DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/orquestra?schema=public"
```bash
# Aplique as migrations para criar as tabelas no banco de dados
npx prisma migrate dev

# Inicie o servidor do backend
npm run dev

O servidor da API estará a correr em http://localhost:3333.

2. Configuração do Frontend (orquestra-app)
Abra um novo terminal para executar o frontend.

# Navegue para a pasta da aplicação
cd orquestra-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

A aplicação React estará disponível em http://localhost:5173 (ou outra porta indicada pelo Vite).