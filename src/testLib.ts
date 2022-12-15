export function expect<T>(expected: T) {
  return {
    toBe<U extends T>(result: U) {
      if (result !== expected) {
        throw new Error(`❌ ${result} is not equal to ${expected}`)
      }
    }
  }
}

export function test(description: string, callback: () => void) {
  try {
    callback()
    console.log(`✅ ${description}`)
  } catch (error) {
    console.log(`❌ ${description}`)
    console.log(error)
  }
}