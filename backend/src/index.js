const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
* Métodos HTTP:
* 
* GET: Buscar ou listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
teste
*/

/**
* Tipos de parâmetros
* 
* Query Params: Parâmetros nomeados enviados na rota após "?" (Utilizar em filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * Tipos de bancos:
 * 
 * Relacionais
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * Não Relacionais
 * NoSQL: MongoDB, CouchDB, etc.
*/

/**
 * Driver: SELEXT * FROM users
 * Query Builder: table('users').select('*').where
*/


app.listen(3333);

