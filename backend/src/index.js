const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


//recurso é oq queremos obter e vem depois da barra, esse conjunto é chamado de rota

/*
Métodos HTTP
GET: buscar/listar uma informação no backend
POST: inserir uma informação no backend
PUT: altera uma informação no backend
DELETE: apaga uma informação no backend
*/

/**
 * Tipos de parametros?
 * 
 * Query params: parametros enviados na rota após "?" e geralmente serve para declarar filtros, paginação, etc
 * Route params: parametros utilizados para identificar um recurso(ex: /users/:id => /users/1)
 * Request body: corpo da requisição, utilizado para criar ou alterar recursos
 * request, guarda todos os dados que vem da requisição do usuário
 * reponse, responsável por retornar os dados para o usuário
 */

 /**
  * bancos de dados
  * SQL:MySQl, SQLite, Oracle, etc...
  * NoSQL MongoDB, CouchDB...
  * 
  * Estratégias para implementação:
  * DRIVER: select * from users
  * ou
  * Query builder: table('users').select('*').where()
  *     knex.js
  *     npm install knex
  *     npm install sqlite3
  */
