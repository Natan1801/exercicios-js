const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalrio = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = reponse.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalrio)

    console.log(func)
})
