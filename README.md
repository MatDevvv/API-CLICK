Descrição da API para Gerenciamento de Usuários e Salas

Tecnologias Utilizadas

AdonisJS: Framework MVC para Node.js, facilitando o desenvolvimento de APIs robustas.

JavaScript: Linguagem de programação utilizada no desenvolvimento da API.

Node.js: Ambiente de execução para JavaScript no lado do servidor.

Funcionalidades da API
Criação de Usuários e Salas:

Endpoint para criar novos usuários.
Endpoint para criar novas salas.
Armazenamento de Dados:

Armazenamento de informações de usuários e salas em um banco de dados (MySQL, PostgreSQL, SQLite, etc.).
Uso de migrations para estruturar e gerenciar o esquema do banco de dados.
Consulta e Listagem:

Endpoint para listar todos os usuários.
Endpoint para listar todas as salas.
Endpoint para buscar detalhes específicos de um usuário ou sala.
Atualização de Dados:

Endpoint para atualizar informações de usuários.
Endpoint para atualizar informações de salas.
Exclusão de Dados:

Endpoint para excluir um usuário.
Endpoint para excluir uma sala.
Relacionamento entre Usuários e Salas:

Estrutura dos Endpoints:

Usuários:
POST /users: Cria um novo usuário.
GET /users: Lista todos os usuários.
GET /users/:id: Busca detalhes de um usuário específico.
PUT /users/:id: Atualiza informações de um usuário específico.
DELETE /users/:id: Exclui um usuário específico.

Salas:
POST /rooms: Cria uma nova sala.
GET /rooms: Lista todas as salas.
GET /rooms/:id: Busca detalhes de uma sala específica.
PUT /rooms/:id: Atualiza informações de uma sala específica.
DELETE /rooms/:id: Exclui uma sala específica.

Relacionamentos:

POST /rooms/
/users/:userId: Associa um usuário a uma sala.
GET /users/
/rooms: Lista todas as salas de um usuário específico.
GET /rooms/
/users: Lista todos os usuários de uma sala específica.

English version:
Description of the API for User and Room Management

Technologies Used

AdonisJS: MVC framework for Node.js, facilitating the development of robust APIs.

JavaScript: Programming language used in the development of the API.

Node.js: Execution environment for JavaScript on the server side.

API Functionalities
Creating Users and Rooms:

Endpoint to create new users.
Endpoint to create new rooms.
Data Storage:

Storing user and room information in a database (MySQL, PostgreSQL, SQLite, etc.).
Using migrations to structure and manage the database schema.
Querying and Listing:

Endpoint to list all users.
Endpoint to list all rooms.
Endpoint to search for specific details of a user or room.
Data Update:

Endpoint to update user information.
Endpoint to update room information.
Data Deletion:

Endpoint to delete a user.
Endpoint to delete a room.
Relationship between Users and Rooms:

Endpoint Structure:

Users:
POST /users: Creates a new user.
GET /users: Lists all users.
GET /users/:id: Fetches details for a specific user.
PUT /users/:id: Updates information for a specific user.
DELETE /users/:id: Deletes a specific user.

Rooms:
POST /rooms: Creates a new room.
GET /rooms: Lists all rooms.
GET /rooms/:id: Fetches details for a specific room.
PUT /rooms/:id: Updates information for a specific room.
DELETE /rooms/:id: Deletes a specific room.

Relationships:

POST /rooms/
/users/:userId: Associates a user with a room.
GET /users/
/rooms: Lists all rooms owned by a specific user.
GET /rooms/
/users: Lists all users in a specific room.
