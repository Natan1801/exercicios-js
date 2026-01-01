// middleware pattern (chain of responsibility)
const pass1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const pass2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const pass3 = ctx => ctx.valor3 = 'mid3'

const exe = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length&&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)