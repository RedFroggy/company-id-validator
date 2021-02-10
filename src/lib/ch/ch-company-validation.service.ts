import {COMPANY_CH_DATA} from "../../data/ch/ch.model";
import {CompanyValidator} from "../company-id-validator.decorator";
import {CompanyValidationService} from "../company-validation.service";

@CompanyValidator
export class ChCompanyValidationService extends CompanyValidationService {

  constructor() {
    super('CH', COMPANY_CH_DATA);
  }

  toParentCompanyId(companyId: string): string {
    return companyId;
  }

  toVatNumber() {
    return null;
  }

  validate(companyId: string): boolean {
    const sanitizedCompanyId = this.sanitize(companyId);

    if (sanitizedCompanyId.length != 12 || !sanitizedCompanyId.startsWith('CHE')) {
      return false;
    }

    const digits = sanitizedCompanyId.replace('CHE', '');
    if(!Number.isInteger(Number(digits))) {
      return false;
    }

    const digitsParts: number[] = digits.split("").map(d => Number(d));
    const weights = [ 5, 4, 3, 2, 7, 6, 5, 4 ];

    let total = 0;
    for(let i=0; i< digitsParts.length -1; i++) {
      total += digitsParts[i] * weights[i];
    }

    const expectedDigit = 11 - (total % 11);
    return expectedDigit === digitsParts[digitsParts.length -1];
  }

  sanitize(value: string): string {
    return super.sanitize(value).replace(/\./g,'');
  }
}
