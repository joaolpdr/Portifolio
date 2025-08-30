<p align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React Logo" width="100"/>
<h1 align="center">Projeto Orquestra 🎵</h1>
</p>

<p align="center">
<strong>Um sistema de gestão de projetos e tarefas colaborativo, Full-Stack, construído com as mais modernas tecnologias do ecossistema JavaScript.</strong>
</p>

<p align="center">
<img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status do Projeto"/>
<img src="https://img.shields.io/badge/licen%C3%A7a-MIT-blue" alt="Licença MIT"/>
</p>

📑 Sobre o Projeto
O Orquestra é uma aplicação web completa, inspirada em ferramentas como Trello e Asana, projetada para ajudar equipas e indivíduos a organizar fluxos de trabalho de forma visual e intuitiva. O objetivo é fornecer uma plataforma robusta para criar quadros, gerir tarefas através de colunas (Kanban) e acompanhar o progresso de múltiplos projetos.

Este projeto foi desenvolvido como um estudo de caso aprofundado, demonstrando a construção de uma aplicação Full-Stack do zero, desde a modelagem do banco de dados relacional e a criação de uma API RESTful segura, até o desenvolvimento de uma interface de utilizador reativa, moderna e responsiva.

✨ Funcionalidades Principais
Backend (orquestra-api)
✅ Autenticação Segura: Registo de utilizadores com senhas criptografadas (bcryptjs) e sistema de login com Tokens JWT (JSON Web Tokens).

✅ Gestão de Quadros (Boards): API para criar, listar e visualizar quadros, com cada quadro associado ao utilizador que o criou.

✅ Gestão de Tarefas (Tasks): Endpoints para criação de tarefas dentro de um quadro específico.

✅ Segurança de Rotas: Implementação de middleware de autenticação para proteger rotas privadas, garantindo que um utilizador só pode aceder e modificar os seus próprios dados.

✅ Relacionamentos de Dados: Estrutura de dados relacional (User → Board → Task) gerida de forma eficiente com o ORM Prisma.

Frontend (orquestra-app)
✅ Autenticação de Utilizador: Páginas de Login e Registo funcionais, integradas com a API.

✅ Gestão de Estado Global: Controlo centralizado do estado de autenticação com a Context API e Hooks (useAuth).

✅ Navegação e Rotas Protegidas: Sistema de rotas com react-router-dom que protege páginas como o Dashboard, redirecionando utilizadores não autenticados.

✅ Dashboard Interativo: O utilizador pode ver uma lista dos seus quadros e criar novos em tempo real.

✅ Navegação Dinâmica: Ao clicar num quadro, o utilizador é levado para uma página de visualização específica, preparando o terreno para a gestão de tarefas.

🗺️ Roadmap de Funcionalidades Futuras

[ ] Gestão de Colunas: Criar, renomear e apagar colunas dentro de um quadro.

[ ] Arrastar e Soltar (Drag and Drop): Mover tarefas entre colunas.

[ ] Edição e Exclusão: Funcionalidades completas de CRUD para tarefas e quadros.

[ ] Detalhes da Tarefa: Adicionar descrições, etiquetas, datas de entrega e membros responsáveis.

[ ] Convite de Membros: Permitir que utilizadores convidem outras pessoas para colaborar nos seus quadros.

🛠️ Tecnologias Utilizadas
O projeto foi construído com uma arquitetura de monorepo, separando as responsabilidades entre o backend e o frontend para uma melhor organização e escalabilidade.

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
<img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
</p>

Categoria	Tecnologia
Backend	Node.js, Express.js
Frontend	React, Vite, Tailwind CSS
Base de Dados & ORM	PostgreSQL, Prisma
Autenticação	JWT, bcryptjs

Exportar para as Planilhas
📂 Estrutura do Projeto
O projeto está organizado num monorepo com duas pastas principais:

/
├── orquestra-api/   # Contém todo o código do backend (servidor Node.js)
└── orquestra-app/   # Contém todo o código do frontend (aplicação React)
🚀 Como Executar o Projeto Localmente
Para executar o projeto na sua máquina, siga os passos abaixo.

Pré-requisitos
Node.js (versão LTS recomendada)

PostgreSQL instalado e a correr

npm (ou outro gestor de pacotes como Yarn ou pnpm)

Git

1. Clonar o Repositório
Bash

# Clone este repositório para a sua máquina local
git clone https://github.com/joaolucaspro/orquestra.git

# Navegue para a pasta do projeto
cd orquestra
Nota: Substitua o URL acima pelo URL do seu repositório.

2. Configuração do Backend (orquestra-api)
Bash

# 1. Navegue para a pasta da API
cd orquestra-api

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um ficheiro .env na raiz de /orquestra-api e adicione a sua URL de conexão do PostgreSQL
# Exemplo:
DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/orquestra?schema=public"
JWT_SECRET="SUA_CHAVE_SECRETA_PARA_JWT"

# 4. Aplique as migrations para criar as tabelas na base de dados
npx prisma migrate dev

# 5. Inicie o servidor do backend
npm run dev
O servidor da API estará a correr em http://localhost:3333.

3. Configuração do Frontend (orquestra-app)
Abra um novo terminal para executar o frontend simultaneamente.

Bash

# 1. Navegue para a pasta da aplicação
cd orquestra-app

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um ficheiro .env na raiz de /orquestra-app para apontar para a API
VITE_API_URL="http://localhost:3333"

# 4. Inicie o servidor de desenvolvimento
npm run dev
A aplicação React estará disponível em http://localhost:5173 (ou outra porta indicada pelo Vite).

📜 Licença
Este projeto está sob a licença MIT. Veja o ficheiro LICENSE para mais detalhes.

<p align="center">
Desenvolvido com ❤️ por João Lucas do Prado Ribeiro
</p>
<p align="center">
<a href="https://github.com/joaolucaspro" target="_blank">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://www.linkedin.com/in/joaolucaspro/" target="_blank">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
</p>
