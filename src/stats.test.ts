import { sum, average } from './stats'
import { expect } from './testLib'

let result = sum([1, 2, 3])
let expected = 6
expect(expected).toBe(result)


result = average([1, 2, 3])
expected = 2
expect(expected).toBe(result)




