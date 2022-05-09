import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdService} from "../company-id.service";
import {COMPANY_PL_DATA} from "./pl.model";

export class PlCompanyIdService extends CompanyIdService {
  constructor() {
    super('PL', COMPANY_PL_DATA);
  }

  public validate(companyId: string, companyIdInfo: CompanyIdInfoModel): boolean {
    const sanitizedCompanyId = this.sanitize(companyId)
      .replace(this.countryCode, '');

    if (!Number.isInteger(Number(sanitizedCompanyId))) {
      return false;
    }

    if (companyIdInfo.type === CompanyIdType.VAT) {
      if (sanitizedCompanyId.length !== 10) {
        return false;
      }

      const digits: number[] = sanitizedCompanyId.split("").map(d => Number(d));
      const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];

      let total = 0;
      for(let i=0; i< digits.length; i++) {
        total += digits[i] * weights[i];
      }

      return (total % 11) === 0;
    } else {
      if (![9, 14].includes(sanitizedCompanyId.length)) {
        return false;
      }

      const digitsStr = sanitizedCompanyId.substr(0, companyId.length -1)
      const lastDigit = Number(sanitizedCompanyId.substring(sanitizedCompanyId.length - 1));

      const checkDigit = this.calculateChecksum(digitsStr);
      if (checkDigit != lastDigit) {
        return false;
      }

      if (sanitizedCompanyId.length == 14 && Number(digitsStr[8]) !== checkDigit) {
        return false;
      }
    }

    return true;
  }

  private calculateChecksum(companyId: string): number {
    const  digits = companyId
      .split("")
      .map(value => Number(value));

    const weights = digits.length === 8
      ? [8, 9, 2, 3, 4, 5, 6, 7] : [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];

    let total = 0;
    for(let i=0; i< digits.length; i++) {
      total += digits[i] * weights[i];
    }

    return total % 11 % 10;
  }
}
