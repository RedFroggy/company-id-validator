import {Alpha2Code, getName, registerLocale} from 'i18n-iso-countries';
import {CompanyIdInfoModel} from "../../types/company-id-info.model";
import {CompanyIdType} from "../../types/company-id-type";

// eslint-disable-next-line @typescript-eslint/no-var-requires
registerLocale(require("i18n-iso-countries/langs/en.json"));

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

      const matchedCompanyInfo = this.infos.find((info) => info.patterns
        && info.patterns.some((pattern) => new RegExp(pattern).test(this.processBeforeValidation(sanitizedQuery, info))));

      if (matchedCompanyInfo) {
        companyIdInfo = Object.assign({}, companyIdInfo, matchedCompanyInfo);
        companyIdInfo.countryName = getName(companyIdInfo.countryCode, 'en', {select: 'alias'});
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

  protected processBeforeValidation(companyId: string, companyInfo?: CompanyIdInfoModel): string {
    return companyId;
  }

  protected isParentLevelCompanyId(companyId: string): boolean {
    return this.infos.some(info => info.parentLevel
    && info.patterns.some((pattern) => new RegExp(pattern).test(companyId)));
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
