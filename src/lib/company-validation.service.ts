import {CompanyInfo} from "../types/company-info.model";

/**
 * Abstract company validation service
 * - Validate the company identifier based
 * on the provided companyId and country code
 * - Returns detailed information on the provided
 * company identifier and country code
 */
export abstract class CompanyValidationService {
  countryCode: string;
  protected infos: CompanyInfo[];

  constructor(countryCode: string, infos: CompanyInfo[]) {
    this.countryCode = this.sanitize(countryCode);
    this.infos = infos;
  }

  /**
   * Returns detailed information about the given {@see companyId}.
   * If there is more than one identifier defined for one country the
   * {@see CompanyInfo#pattern} property is used to determine which one to use.
   */
  info(companyId: string): CompanyInfo {
    // Sanitize company identifier
    const sanitizedCompanyId = this.sanitize(companyId);

    let companyInfo: CompanyInfo = {};
    companyInfo.valid = false;
    companyInfo.companyId = companyId;
    companyInfo.sanitizedCompanyId = sanitizedCompanyId;

    if (this.infos) {

      // If only one identifier defined no need to check pattern
      if (this.infos.length === 1) {
        companyInfo = {...this.infos[0]};
      } else {
        // If multiple identifiers, we use regular expressions
        // in {@see CompanyInfo#pattern} to find the one that matches the most
        const matchCompanyInfo = this.infos.find((d) => d.pattern
          && new RegExp(d.pattern).test(sanitizedCompanyId));

        if (matchCompanyInfo) {
          companyInfo = Object.assign({}, companyInfo, matchCompanyInfo);
        }
      }

      const validCompanyId = this.validate(companyId);

      if (validCompanyId) {
        if (!companyInfo.parentLevel) {
          companyInfo.parentCompanyId = this.toParentCompanyId(sanitizedCompanyId);
        }
        companyInfo.vatNumber = this.toVatNumber(sanitizedCompanyId);

        // Indicate if the identifier is locally valid
        companyInfo.valid = true;
      }
    }

    return companyInfo;
  }

  /**
   * Sanitize {@see value}
   * by removing spaces and dashes
   */
  sanitize(value: string): string {
    if (value) {
      return value.replace(/-|\s/g,'')
        .trim().toUpperCase();
    }
    return null;
  }

  isParentLevelCompanyId(companyId: string): boolean {
    return this.infos.some(info => info.parentLevel
      && new RegExp(info.pattern).test(companyId));
  }

  abstract toParentCompanyId(companyId: string): string;

  /**
   * Locally convert a company identifier to a VAT number
   */
  abstract toVatNumber(companyId?: string);

  /**
   * Validate the given {@see companyId}
   * based on local algorithm
   */
  abstract validate(companyId: string): boolean;
}
