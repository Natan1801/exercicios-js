//Não aceita repetição e não é indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Ana', 'Maria', 'João', 'Maria']
const nomesSet = new Set(nomes)
console.log(nomesSet)