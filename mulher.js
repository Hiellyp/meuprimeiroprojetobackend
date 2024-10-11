const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Ada Lovelace',
        imagem: 'https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fsuper.abril.com.br%2Fwp-content%2Fuploads%2F2016%2F12%2Fada_lovelace_portrait_circa_1840.jpg%3Fquality%3D70%26strip%3Dall&tbnid=rzzU0HK4luievM&vet=1&imgrefurl=https%3A%2F%2Fsuper.abril.com.br%2Fcoluna%2Fsuperlistas%2F7-coisas-que-voce-deveria-saber-sobre-ada-lovelace&docid=WC7GonqxNf7QwM&w=442&h=550&hl=pt-PT',
        minibio: 'Considerada a mãe da computação, foi a primeira programadora da história.'
    })
}
   

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)