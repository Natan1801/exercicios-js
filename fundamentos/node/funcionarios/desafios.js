const funcionarios = [
    {'nome': 'Mey', 'salario': 4000, 'pais' : 'China'},
    {'nome': 'Jil', 'salario': 5000, 'pais': 'China'},
    { 'nome': 'Pay', 'salario': 6000, 'pais' : 'China' },
]
const chineses = f => f.pais === 'China'
const salarios = f => f.salario
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
const axios = require('axios')
const url = 'https://raw.githubusercontent.com/nathanpc/curso-js/master/funcionarios.json'
axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(chineses).map(salarios).reduce(menorSalario)
    console.log(func)
})