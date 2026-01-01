class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CircoloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamento(...lancamentos){
        lancamentos.forEach(l => this.lancamento.push(1))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CircoloFinanceiro(6, 2023)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())