Array.prototype.filter2 = function(callback, thisArg){
    const newArray = []
    for (let i = 0; i< this.length; i++)
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Plástico', preco: 12.49, fragil: false},
    {nome: 'Copo de Vidro', preco: 18.99, fragil: true}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))