/**
 * Implements the Luhn algorithm
 * Please see {@link https://en.wikipedia.org/wiki/Luhn_algorithm}
 */
export class LuhnUtils {
  static validate(value: string): boolean {
    const len = value.length
    const parity = len % 2
    let sum = 0
    for (let i = len-1; i >= 0; i--) {
      let d = parseInt(value.charAt(i))
      if (i % 2 == parity) { d *= 2 }
      if (d > 9) { d -= 9 }
      sum += d
    }
    return (sum % 10) == 0;
  }
}
