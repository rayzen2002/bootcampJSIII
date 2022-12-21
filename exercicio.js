const media = (...args) => {
  const sum = args.reduce((accum, num) => accum + num, 0)
  return sum / args.length
}

const mediaPonderada = (...args) => {
  const sum = args.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  )
  const weightSum = args.reduce((accum, arg) => accum + (arg.weight ?? 1), 0)

  return sum / weightSum
}

console.log(
  `Média Ponderada: ${mediaPonderada(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
)

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]

  return media(firstMedian, secondMedian)
}

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}
