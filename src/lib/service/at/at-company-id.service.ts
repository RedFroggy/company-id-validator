import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdService} from "../company-id.service";
import {COMPANY_AT_DATA} from "./at.model";

const AT_NUMBER_PATTERN = '^[0-9]+[a-zA-Z]$';

/**
 * Validate austrian companies identifiers: Austrian Company Register Numbers.
 * See {@link https://www.vatify.eu/austria-vat-number.html#:~:text=Companies%20in%20Austria%20are%20issued,UID)%20when%20registering%20for%20VAT.}
 */
export class AtCompanyIdService extends CompanyIdService {
  constructor() {
    super('AT', COMPANY_AT_DATA);
  }

  /**
   * The Austrian company register number consist of digits followed
   * by a single letter, e.g. "122119m". Sometimes it is presented
   * with preceding "FN", e.g. FN 122119m
   */
  public validate(companyId: string, companyIdInfo?: CompanyIdInfoModel): boolean {
    let sanitizedCompanyId = this.sanitize(companyId);

    if (companyIdInfo && companyIdInfo.type === CompanyIdType.VAT) {
      if (sanitizedCompanyId.startsWith('AT')) {
        sanitizedCompanyId = sanitizedCompanyId.substring(2);
      }

      const digits = sanitizedCompanyId.split('');

      if (digits[0] != 'U' || isNaN(Number(digits.slice(1).join(''))) || sanitizedCompanyId.length !== 9) {
        return false;
      }

      const digitsToValidate = digits.slice(1, digits.length -1);

      const expectedCheckDigit = (10 - (this.computeR(digitsToValidate)
        + this.computeC(digitsToValidate, 2)
        + this.computeC(digitsToValidate, 4) + this.computeC(digitsToValidate, 6)
        + this.computeC(digitsToValidate, 8) + 4) % 10) % 10;

      return expectedCheckDigit.toString() === digits[digits.length -1 ];
    }

    if (sanitizedCompanyId.startsWith('FN')) {
      sanitizedCompanyId = sanitizedCompanyId.substring(2);
    }

    return new RegExp(AT_NUMBER_PATTERN).test(sanitizedCompanyId);
  }

  private computeR(digits) {
    return this.computeS(digits, 3) + this.computeS(digits, 5) + this.computeS(digits, 7);
  }

  private computeC(digits, index) {
    return digits[index - 2];
  }

  private computeS(digits, index) {
    return Math.floor(this.computeC(digits, index) / 5) + (this.computeC(digits, index) * 2) % 10;
  }

  sanitize(value: string): string {
    return super.sanitize(value).replace(/\.|\//g, '');
  }
}
