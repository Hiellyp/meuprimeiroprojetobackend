const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        Nome: 'Ada Lovelace',
        Imagem: 'https://commons.wikimedia.org/wiki/File:Ada_lovelace.jpg#/media/Ficheiro:Ada_lovelace.jpg',
        Minibio: 'Considerada a mãe da computação, foi a primeira programadora da história.'
        
    },
    {
        Nome: 'Grace Hopper',
        Imagem: 'https://commons.wikimedia.org/wiki/File:Commodore_Grace_M._Hopper,_USN_(covered).jpg#/media/Ficheiro:Commodore_Grace_M._Hopper,_USN_(covered).jpg',
        Minibio: 'Hopper participou da criação do UNIVAC, o primeiro computador digital totalmente eletrônico. '
    },
    {
        Nome: 'Hedy Lamarr',
        Imagem: 'https://commons.wikimedia.org/wiki/File:Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg#/media/Ficheiro:Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg',
        Minibio: 'Atriz e inventora austríaca, desenvolveu um sistema de comunicação por meio de frequências, que anos depois se tornou a base para o Wi-Fi'
    }
]

function mostraMulheres(request, response) {
     response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)