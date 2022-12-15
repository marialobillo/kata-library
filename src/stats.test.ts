import { sum, average } from './stats'
import { expect, test } from './testLib'

let result, expected
test("Calculate the sum of elements in an array", () => {
  result = sum([1, 2, 3])
  let expected = 6
  expect(expected).toBe(result)
})


test("Calculate the average of elments in an array", () => {
  result = average([1, 2, 3])
  let expected = 2
  expect(expected).toBe(result)
})





