import {CompanyIdService} from "../company-id.service";
import {COMPANY_AL_DATA} from "./al.model";

const AL_NUMBER_PATTERN = '^[JKL][0-9]{8}[A-Z]$';

/**
 * Validate albanian companies identifiers: NIPT.
 * See {@link https://www.vatify.eu/albania-vat-number.html}
 */
export class AlCompanyIdService extends CompanyIdService {
  constructor() {
    super('AL', COMPANY_AL_DATA);
  }

  /**
   * The Albanian NIPT (Numri i Identifikimit për Personin e Tatueshëm, Albanian VAT number)
   * is a 10-digit number with the first and last character being letters
   */
  public validate(companyId: string): boolean {
    let sanitizedCompanyId = this.sanitize(companyId);

    if (sanitizedCompanyId.startsWith('AL')) {
      sanitizedCompanyId = sanitizedCompanyId.substring(2);
    }
    if (sanitizedCompanyId.startsWith('(AL)')) {
      sanitizedCompanyId = sanitizedCompanyId.substring(4);
    }

    if (sanitizedCompanyId.length != 10) {
      return false;
    }

    return new RegExp(AL_NUMBER_PATTERN).test(sanitizedCompanyId);
  }
}
