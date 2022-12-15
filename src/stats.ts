function sum(numbers: number[]): number {
  return numbers.reduce((previous, current) => previous + current)
}

function average(numbers: number[]) {
  return sum(numbers) / numbers.length
}

export {
  sum,
  average
}