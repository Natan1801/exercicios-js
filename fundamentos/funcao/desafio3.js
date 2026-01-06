const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            if (err) return reject(err)
            resolve(conteudo)
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))
    .catch(err => console.error(err))
