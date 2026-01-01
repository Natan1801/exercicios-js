const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 8-18 * * 1-5', function () {
  console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada!' )
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 8
regra.minute = 30
regra.second = 0

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando tarefa 2!', new Date().getSeconds())
})