import {CompanyIdService} from "../company-id.service";
import {COMPANY_CN_DATA} from "./cn.model";

export class CnCompanyIdService extends CompanyIdService {

  constructor() {
    super('CN', COMPANY_CN_DATA);
  }

  validate(companyId: string): boolean {
    const sanitizedCompanyId = this.sanitize(companyId);

    if (sanitizedCompanyId.length !== 18) {
      return false;
    }

    const digits: number[] = sanitizedCompanyId.substring(0, sanitizedCompanyId.length - 1).split("").map(d => Number(d));
    const expectedCheckDigit = sanitizedCompanyId.substring(sanitizedCompanyId.length - 1);

    const alphabet = '0123456789ABCDEFGHJKLMNPQRTUWXY';
    const weigths= [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    let total = 0;

    for (let i=0; i < digits.length; i++) {
      const alphabetIndex = alphabet.indexOf(digits[i].toString());
      total += alphabetIndex * weigths[i];
    }

    const checkDigit = alphabet[31 - (total % 31)];

   return expectedCheckDigit === checkDigit;
  }

}
