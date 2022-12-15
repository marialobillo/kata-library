import { sum, average } from './stats'

let result = sum([1, 2, 3])
let expected = 6

if(result === expected) {
  console.log("Ok - The sum() test is passing")
} else {
  throw new Error(`X ${result} for sum() is not equal to ${expected}`)
}

result = average([1, 2, 3])
expected = 2

if (result === expected) {
  console.log("Ok - The average() test is passing")
} else {
  throw new Error(`X ${result} for average() is not equal to ${expected}`)
}