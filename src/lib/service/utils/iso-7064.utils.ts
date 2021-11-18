export class Iso7064Utils {

  /**
   * The ISO 7064 Mod 11, 10 algorithm.
   * The Mod 11, 10 algorithm uses a number of calculations modulo 11 and 10 to
   * determine a checksum.
   */
  static mod1110Validation(value: string): boolean {
    let check = 5

    const digits = value.split('')
      .map(digit => Number(digit));

    for (let i=0; i < digits.length; i++) {
      check = (((check || 10) * 2) % 11 + digits[i]) % 10;
    }

    return check === 1;
  }

}
