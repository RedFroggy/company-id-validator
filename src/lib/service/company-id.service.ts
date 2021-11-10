import {Alpha2Code, getName} from 'i18n-iso-countries';
import {CompanyIdType} from "../../types/company-id-type";
import {CompanyIdInfoModel} from "../../types/company-id-info.model";

/**
 * Abstract company validation service
 * - Validate the company identifier based
 * on the provided companyId and country code
 * - Returns detailed information on the provided
 * company identifier and country code
 */
export abstract class CompanyIdService {
  countryCode: Alpha2Code;
  protected infos: CompanyIdInfoModel[];

  constructor(countryCode: Alpha2Code, infos: CompanyIdInfoModel[]) {
    this.countryCode = this.sanitize(countryCode) as Alpha2Code;
    this.infos = infos;
  }

  /**
   * Returns detailed information about the given {@see companyId}.
   * If there is more than one identifier defined for one country the
   * {@see CompanyIdInfoModel#pattern} property is used to determine which one to use.
   */
  info(query: string): CompanyIdInfoModel {
    // Sanitize query
    const sanitizedQuery = this.sanitize(query);

    let companyIdInfo: CompanyIdInfoModel = {};
    companyIdInfo.valid = false;
    companyIdInfo.query = query;
    companyIdInfo.sanitizedQuery = sanitizedQuery;
    companyIdInfo.countryCode = this.countryCode;

    if (this.infos) {

      const matchedCompanyInfo = this.infos.find((d) => d.pattern
        && new RegExp(d.pattern).test(sanitizedQuery));

      if (matchedCompanyInfo) {
        companyIdInfo = Object.assign({}, companyIdInfo, matchedCompanyInfo);
        if (!companyIdInfo.locale) {
          companyIdInfo.locale = companyIdInfo.countryCode.toLowerCase();
        }
        companyIdInfo.countryName = getName(companyIdInfo.countryCode, companyIdInfo.locale);
      }

      const validCompanyId = Boolean(matchedCompanyInfo && this.validate(sanitizedQuery, matchedCompanyInfo));

      if (validCompanyId) {

        if (companyIdInfo.type === CompanyIdType.VAT) {
          companyIdInfo.vatNumber = sanitizedQuery;
          companyIdInfo.id = this.vatNumberToCompanyId(sanitizedQuery);
        } else {
          companyIdInfo.id = sanitizedQuery;
          companyIdInfo.vatNumber = this.companyIdToVATNumber(sanitizedQuery);
        }

        if (!companyIdInfo.parentLevel) {
          companyIdInfo.parentId = this.toParentCompanyId(sanitizedQuery);
        }

        // Indicate if the identifier is locally valid
        companyIdInfo.valid = true;
      }
    }

    return companyIdInfo;
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
  abstract validate(companyId: string, info?: CompanyIdInfoModel): boolean;
}
