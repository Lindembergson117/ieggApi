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


const ovoGemamole = new Receita({
    nome: 'Ovo com gema mole',
    descricao: 'A gema está gemendo',
    ingredientes: 'Ovo, gema',
    modoPreparo: 'primeiro pegue o ovo e depois pegue a gema mole e coma a gema mole',
    tempoPreparo: 5,
    nota: 5
});

let receitas = [
    Receita({
        nome: 'macarrão com ovo',
        descricao: 'macarão italiano com ovo chines',
        ingredientes: 'ovo, macarrão',
        modoPreparo: 'primeiro pegue ovo chines e depois prepare o macarrão e misture ambos',
        tempoPreparo: 10,
        nota: 7
    }),
    Receita({
        nome: 'ovo com fruta',
        descricao: 'ovo argentino com frutas brasileiras',
        ingredientes: 'ovo, frutas',
        modoPreparo: 'primeiro pegue o ovo e misture com qualquer fruta',
        tempoPreparo:40,
        nota: 10
    })
]

function prencherReceitas() {
    Receita.insertMany(receitas, function(err){
        if(err){
            console.log(err)
        }
    })
}
prencherReceitas()

//receita.save();

//inicio
app.get('/', function (req, res) {
    res.send('ola')
})


//fim
app.listen(3000, function () {
    console.log('Servidor rodando')
})