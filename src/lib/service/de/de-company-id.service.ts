import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdService} from "../company-id.service";
import {Iso7064Utils} from "../utils/iso-7064.utils";
import {COMPANY_DE_DATA} from "./de.model";
import {GERMAN_COURTS} from "./models/german-court.model";
import {GERMAN_REGISTRY_TYPES} from "./models/german-registry.model";

const COURT_REGEXP = '(.*)';
const REGISTRY_REGEXP =  `(${GERMAN_REGISTRY_TYPES.join('|')})`;
const NUMBER_REGEXP = '([1-9][0-9]{0,5})(s*(\\w[A-ZÖ]{1,3}))?';
const FORMATS = [
  REGISTRY_REGEXP + '\\s?' + NUMBER_REGEXP + ',?\\s?' + COURT_REGEXP + '$',
  COURT_REGEXP + ',?\\s?' + REGISTRY_REGEXP + '\\s?' + NUMBER_REGEXP + '$',
]

export class DeCompanyIdService extends CompanyIdService {
  constructor() {
    super('DE', COMPANY_DE_DATA);
  }

  info(query: string): CompanyIdInfoModel {
    const info = super.info(query);
    info.extraProperties = {
      courts: GERMAN_COURTS,
      registryTypes: GERMAN_REGISTRY_TYPES
    };
    return info;
  }

  validate(companyId: string, companyInfo?: CompanyIdInfoModel): boolean {
    if (companyInfo.type === CompanyIdType.LOCAL_COMPANY_ID) {
      const group = this.extractCompanyIdGroups(companyId);
      return group && group.length === 3;
    }

    if (companyInfo.type === CompanyIdType.VAT) {

      let sanitizedCompanyId = this.sanitize(companyId);
      if (sanitizedCompanyId.startsWith(this.countryCode)) {
        sanitizedCompanyId = sanitizedCompanyId.replace(this.countryCode, '');
      }

      if (!Number.isInteger(Number(sanitizedCompanyId))) {
        return false;
      }

      const digits = sanitizedCompanyId.split('').map(value => Number(value));
      if (digits.length != 9 || digits[0] === 0) {
        return false;
      }

      return Iso7064Utils.mod1110Validation(sanitizedCompanyId);
    }

    return false;
  }

  protected processBeforeValidation(companyId: string, companyInfo?: CompanyIdInfoModel): string {
    if (companyInfo.type === CompanyIdType.VAT) {
      return companyId;
    }

    const group = this.extractCompanyIdGroups(companyId);
    return group[0];
  }

  private extractCompanyIdGroups(companyId: string): string[] {
    const groups = FORMATS
      .map(format => {
        const groups = new RegExp(format, 'g').exec(companyId);
        if (groups && groups.length === 6) {
          return groups;
        }
        return null;
      })
      .find(group => Boolean(group));

    if (groups) {
      return groups.filter(groupValue => Boolean(groupValue))
    }

    return [];
  }

  sanitize(value: string): string {
    return super.sanitize(value)
      .replace(/-/g,'')
      .replace(/,/g,'')
      .replace(/\./g,'')
      .replace(/\//g,'');
  }
}
