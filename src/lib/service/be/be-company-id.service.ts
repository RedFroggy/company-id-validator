import {CompanyIdService} from "../company-id.service";
import {COMPANY_BE_DATA} from "./be.model";

export class BeCompanyIdService extends CompanyIdService {
  constructor() {
    super('BE', COMPANY_BE_DATA);
  }

  validate(companyId: string): boolean {
    const cleanedCompanyId = this.cleanNumber(companyId);

    if (!Number.isInteger(Number(cleanedCompanyId))
      || Number(cleanedCompanyId) < 0 || cleanedCompanyId.length != 10) {
      return false;
    }

    const firstPartDigits = Number(cleanedCompanyId.substring(0, cleanedCompanyId.length - 2));
    const lastPartDigits = Number(cleanedCompanyId.substring(cleanedCompanyId.length - 2));

    const checksum = (firstPartDigits + lastPartDigits) % 97;

    return checksum === 0;
  }

  private cleanNumber(companyId: string): string {
    const cleanedCompanyId = companyId
      .replace(this.countryCode, '')
      .replace('(0)', '0');

    if (cleanedCompanyId.length == 9) {
      return '0' + cleanedCompanyId;
    }

    return cleanedCompanyId;
  }

  protected vatNumberToCompanyId(vatNumber?: string): string {
    return vatNumber.substring(2);
  }
}
