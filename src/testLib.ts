export function expect<T>(expected: T) {
  return {
    toBe<U extends T>(result: U) {
      if (result === expected)
        console.log("✅ ");
      else
        throw new Error(`❌ ${result} is not equal to ${expected}`);
    }
  }
}