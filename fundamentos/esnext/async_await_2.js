function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = Math.floor(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    const numeros = []

    while (numeros.length < qtdeNumeros) {
        try {
            const numero = await gerarNumerosEntre(1, 60, numeros)
            numeros.push(numero)
        } catch (e) {
          throw 'Que chato!!!'
        }
    }

    return numeros
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)
