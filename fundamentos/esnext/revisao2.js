// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(2, 3))

// Arrow Function (this)
const lexicon1 = () => console.log(this === exports)
const lexicon2 = lexicon1.bind({})
lexicon1()
lexicon2()

// Parametros Default
function log(text = 'Node') {
    console.log(text)
}
log()
log('Sou mais forte')

// Operador Rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))