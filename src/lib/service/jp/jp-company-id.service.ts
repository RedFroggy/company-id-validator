import {Injectable} from "../../injectable.decorator";
import {CompanyIdService} from "../company-id.service";
import {COMPANY_JP_DATA} from "./jp.model";


@Injectable
export class JpCompanyIdService extends CompanyIdService {
  constructor() {
    super('JP', COMPANY_JP_DATA);
  }

  public validate(companyId: string): boolean {
    const sanitizedCompanyId = this.sanitize(companyId);

    if (sanitizedCompanyId.length != 13
      || !Number.isInteger(Number(sanitizedCompanyId))) {
      return false;
    }

    let total = 0;
    const weights: number[] = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    const checkDigit = Number(sanitizedCompanyId.substring(0, 1));
    const digits = sanitizedCompanyId.substring(1, sanitizedCompanyId.length)
      .split('')
      .map(value => Number(value))
      .reverse();

    for (let i=0; i< digits.length; i++) {
      total += digits[i] * weights[i];
    }

    const expectedCheckDigit = 9 - (total % 9);

    return expectedCheckDigit === checkDigit;
  }
}
