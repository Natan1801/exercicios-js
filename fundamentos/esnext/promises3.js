function gerarNumerosEntre(min, max){
    if(min > max){
        [max, min] = [min, max]
        const [x, y] = a

    }

    return new Promise(resolve => {
      const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60).then(console.log)
    .then(num => num * 10)
    .then(numx10 => `O número gerado foi ${numx10}`)
    .then(console.log)