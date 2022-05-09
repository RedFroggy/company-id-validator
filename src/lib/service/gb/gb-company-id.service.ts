import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdService} from "../company-id.service";
import {COMPANY_GB_DATA} from "./gb.model";

export class GbCompanyIdService extends CompanyIdService {

  constructor() {
    super('GB', COMPANY_GB_DATA);
  }

  validate(companyId: string, companyInfo?: CompanyIdInfoModel): boolean {
    if (companyInfo && companyInfo.type === CompanyIdType.VAT) {
      return this.validateVATNumber(companyId);
    }
    return true;
  }

  validateVATNumber(companyId: string): boolean {
    let sanitizedCompanyId = this.sanitize(companyId);
    if (companyId.startsWith('GB') || companyId.startsWith('XI')) {
      sanitizedCompanyId = sanitizedCompanyId.substring(2);
    }

    const companyIdDigits = Number(sanitizedCompanyId.substring(2, sanitizedCompanyId.length));
    if (sanitizedCompanyId.length === 5) {
      if (!Number.isInteger(Number(companyIdDigits))) {
        return false;
      }
    }
    else if (sanitizedCompanyId.length === 11 && ['GD8888', 'HA8888'].includes(sanitizedCompanyId.substring(0,6))) {
      if (!Number.isInteger(Number(sanitizedCompanyId.substring(6, sanitizedCompanyId.length)))) {
        return false;
      }

      const checkDigit = Number(sanitizedCompanyId.substring(6, 9)) % 97;
      if (checkDigit !== Number(sanitizedCompanyId.substring(9, 11))) {
        return false;
      }
    }
    else  if (sanitizedCompanyId.length === 9 || sanitizedCompanyId.length === 12) {
      if (!Number.isInteger(Number(sanitizedCompanyId))) {
        return false;
      }

      const checksum = this.calculateChecksum(sanitizedCompanyId.substring(0, 9));
      if (Number(sanitizedCompanyId.substring(0, 3) ) >= 100) {
        if (![0, 42, 55].includes(checksum)) {
          return false;
        }
      } else if (checksum !== 0 ) {
        return false;
      }
    } else {
      return false;
    }

    return true;
  }

  private calculateChecksum(companyId: string): number {
    const weights = [8, 7, 6, 5, 4, 3, 2, 10, 1];
    const digits: number[] = companyId.split("").map(d => Number(d));
    let total = 0;
    for(let i=0; i< digits.length; i++) {
      total += digits[i] * weights[i];
    }

    return (total % 97);
  }

  sanitize(value: string): string {
    return super.sanitize(value)
      .replace(/\./g,'')
      .replace(/-/g,'');
  }

}
