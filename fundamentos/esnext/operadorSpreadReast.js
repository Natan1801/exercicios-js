//Operador... rest(juntar) e spread(espalhar)
//Usar o rest com parâmentros de uma função

//Usar spread com abjetos
const funcionario = {nome:'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//Usar spread com arrays
const grupoA = ['João', 'Maria', 'Pedro']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)