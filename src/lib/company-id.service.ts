import {CompanyInfo} from "../types/company-info.model";

/**
 * Abstract company validation service
 * - Validate the company identifier based
 * on the provided companyId and country code
 * - Returns detailed information on the provided
 * company identifier and country code
 */
export abstract class CompanyIdService {
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
  info(query: string): CompanyInfo {
    // Sanitize query
    const sanitizedQuery = this.sanitize(query);

    let companyInfo: CompanyInfo = {};
    companyInfo.valid = false;
    companyInfo.query = query;
    companyInfo.sanitizedQuery = sanitizedQuery;

    if (this.infos) {

      const matchedCompanyInfo = this.infos.find((d) => d.pattern
        && new RegExp(d.pattern).test(sanitizedQuery));

      if (matchedCompanyInfo) {
        companyInfo = Object.assign({}, companyInfo, matchedCompanyInfo);
      }

      const validCompanyId = Boolean(matchedCompanyInfo && this.validate(sanitizedQuery, matchedCompanyInfo));

      if (validCompanyId) {

        if (companyInfo.companyIdName === 'VAT') {
          companyInfo.vatNumber = sanitizedQuery;
          companyInfo.companyId = this.vatNumberToCompanyId(sanitizedQuery);
        } else {
          companyInfo.companyId = sanitizedQuery;
          companyInfo.vatNumber = this.companyIdToVATNumber(sanitizedQuery);
        }

        if (!companyInfo.parentLevel) {
          companyInfo.parentCompanyId = this.toParentCompanyId(sanitizedQuery);
        }

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

  protected toParentCompanyId(companyId: string): string {
    return  null;
  }

  /**
   * Locally convert a company identifier to a VAT number
   */
  protected companyIdToVATNumber(companyId?: string): string {
    return null;
  }

  /**
   * Locally convert a VAT number to a company identifier
   */
  protected vatNumberToCompanyId(vatNumber?: string): string {
    return null;
  }

  /**
   * Validate the given {@see companyId}
   * based on local algorithm
   */
  abstract validate(companyId: string, info?: CompanyInfo): boolean;
}
