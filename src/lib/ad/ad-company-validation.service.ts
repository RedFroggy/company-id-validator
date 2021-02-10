import {COMPANY_AD_DATA} from "../../data/ad/ad.model";
import {CompanyValidationService} from "../company-validation.service";

/**
 * Validate andorra companies identifiers: NRT.
 * See {@link https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Andorra-TIN.pdf}
 */
export class AdCompanyValidationService extends CompanyValidationService {
  constructor() {
    super('AD', COMPANY_AD_DATA);
  }

  /**
   * Company identifier name: NRT (Número de Registre Tributari, Andorra tax number)
   * The Número de Registre Tributari (NRT) is an identifier of legal and natural entities for tax purposes.
   * This number consists of one letter indicating the type of entity, then 6
   * digits, followed by a check letter.
   */
  public validate(companyId: string): boolean {
    const sanitizedCompanyId = this.sanitize(companyId);
    const companyIdParts: string[] = sanitizedCompanyId.split("");
    if (companyIdParts.length != 8) {
      return false;
    }

    const firstDigit = companyIdParts[0];
    const lastDigit  = companyIdParts[companyId.length -1];
    const middleDigits = Number(sanitizedCompanyId.substr(1, sanitizedCompanyId.length - 2));

    if (Number.isInteger(Number(firstDigit)) || Number.isInteger(Number(lastDigit))) {
      return false;
    }

    if (!'ACDEFGLOPU'.includes(firstDigit)) {
      return false;
    }

    if (firstDigit === 'F' && middleDigits > 699999) {
      return false;
    }

    return !('AL'.includes(firstDigit) &&
      !(middleDigits > 699999 && middleDigits < 800000));
  }

  toVatNumber() {
    return null;
  }

  toParentCompanyId(companyId: string): string {
    return companyId;
  }
}
