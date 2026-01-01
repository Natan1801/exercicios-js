const fabricante = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir) //Callback é uma função passada como argumento para outra função, que será chamada (executada) depois, geralmente quando alguma tarefa terminar.
fabricante.forEach(fabricante => console.log(fabricante))