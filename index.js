//Inicio
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/iegg');


const receitaSchema = new mongoose.Schema({ // recipeSchema
    nome: String, // tipo são todos maiusculos
    descricao: String,
    ingredientes: String,
    modoPreparo: String,
    tempoPreparo: Number,
    nota: Number
});


const Receita = mongoose.model('receita', receitaSchema);

const receita = new Receita({ nome: 'Ovo com gema mole', descricao: 'A gema está gemendo', ingredientes: 'Ovo, gema', modoPreparo: 'primeiro pegue o ovo e depois pegue a gema mole e coma a gema mole' , tempoPreparo: 5, nota: 5});

receita.save().then(() => console.log('receita criada'));

//inicio
app.get('/', function (req, res) {
    res.send('ola')
})


//fim
app.listen(3000, function(){
    console.log('Servidor rodando')
})



