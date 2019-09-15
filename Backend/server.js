const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');


const app = express();
app.use(express.json());
//PERMIR ACESSO FORA DA APLICAÇÃO
app.use(cors());

//CONECTAR AO BANCO DE DADOS
mongoose.connect('mongodb://localhost:27017/biblioteca', { useNewUrlParser: true });

//IMPORTAR OS MODELOS
requireDir('./src/models');

//IMPORTAR ROTAS
app.use('/biblioteca',require('./src/routes'));

app.listen('3001');