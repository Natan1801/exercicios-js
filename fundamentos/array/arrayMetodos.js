const pilotos = ['Vettel','Alorso', 'Raikkonen', 'Masssa']
pilotos.pop() // Massa quebrou carro
console.log(pilotos)

pilotos.push('Verstappen') 
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

// Adicionando
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) //Massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Novo array
console.log(algunsPilotos2)