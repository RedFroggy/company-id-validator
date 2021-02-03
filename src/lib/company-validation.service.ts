import {CompanyInfo} from "../types/company-info.model";

/**
 * Abstract company validation service
 * - Validate the company identifier based
 * on the provided companyId and country code
 * - Returns detailed information on the provided
 * company identifier and country code
 */
export abstract class CompanyValidationService {
  private $countryCode: string;
  constructor(countryCode: string) {
    this.$countryCode = this.sanitize(countryCode);
  }
  get countryCode(): string {
    return this.$countryCode;
  }
  validate(companyId: string): boolean {
    const companyInfo = this.info(companyId);
    return companyInfo && companyInfo.valid;
  }
  sanitize(value: string): string {
    if (value) {
      return value.replace(/-|\s/g,'')
        .trim().toUpperCase();
    }
    return null;
  }
  abstract info(companyId: string): CompanyInfo;
}
