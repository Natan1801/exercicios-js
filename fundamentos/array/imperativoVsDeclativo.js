const alunos = [
    {nome: 'João', nota: 7.3},
    {nome: 'Maria', nota: 9.2}
]

//imperativo: No estilo imperativo, você diz passo a passo o que o programa deve fazer.
// É como dar uma lista de instruções detalhadas para alguém seguir.
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//declarativa: No estilo declarativo, você diz o que quer que aconteça,
// sem se preocupar tanto com os detalhes do processo.
const getNota = alunos => alunos.nota
const soma = (total, valorAtual) => total + valorAtual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

/*Exemplo de SQL: select codigo, nome, email from clientes where ativo = 1*/ 