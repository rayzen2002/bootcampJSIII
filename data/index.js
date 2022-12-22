const dayjs = require('dayjs')

const data = date => {
  //.format('DD/MM/YYYY')
  var now = dayjs()
  const treatedDate = dayjs(date)
  const age = now.year() - treatedDate.year()
  const birthDay = treatedDate.add(age + 1, 'year')
  const daysLeft = birthDay.diff(now, 'day')

  console.log(`Sua idade eh : ${age}`)
  console.log(
    `Seu proximo aniversario sera em: ${birthDay.format('DD/MM/YYYY')}`
  )
  console.log(`Faltam ${daysLeft} dias para seu aniversario`)
}
console.log(data('12-18-1996'))
