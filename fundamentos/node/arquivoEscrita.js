const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 12.000,
    desconto: 10,
}
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})