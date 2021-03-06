import {COMPANY_IT_DATA} from "../../../data/it/it.model";
import {CompanyValidator} from "../../company-id-validator.decorator";
import {CompanyValidationService} from "../../company-validation.service";
import {LuhnUtils} from "../utils/luhn.utils";

@CompanyValidator
export class ItCompanyValidationService extends CompanyValidationService {

  constructor() {
    super('IT', COMPANY_IT_DATA);
  }

  validate(companyId: string): boolean {
    let sanitizedCompanyId = companyId
      .replace(' ', '')
      .replace('-', '')
      .replace(':', '')
      .toUpperCase();

    if (sanitizedCompanyId.startsWith(this.countryCode)) {
      sanitizedCompanyId = sanitizedCompanyId.replace(this.countryCode, '');
    }

    if (sanitizedCompanyId.length != 11) {
      return false;
    }

    if (!Number.isInteger(Number(sanitizedCompanyId))
      || Number(sanitizedCompanyId.substring(0, 7)) === 0) {
      return false;
    }

    const firstPartDigit = Number(sanitizedCompanyId.substring(7, 10));
    if ((firstPartDigit < 1 || firstPartDigit > 100)
      && ![120, 121, 888, 999].includes(firstPartDigit)) {
      return false;
    }

    return LuhnUtils.validate(sanitizedCompanyId);

  }

  protected vatNumberToCompanyId(vatNumber?: string): string {
    return vatNumber;
  }

  protected companyIdToVATNumber(companyId?: string): string {
    return companyId;
  }
}
