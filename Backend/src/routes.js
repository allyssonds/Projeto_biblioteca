const express = require('express');
const routes = express.Router();

//IMPORTAR CONTROLLER
const LivroController = require('./controllers/LivroController');

routes.get('/livros',LivroController.index);
routes.post('/livros/',LivroController.store);
routes.delete('/livros/:id',LivroController.destroy);

module.exports = routes;