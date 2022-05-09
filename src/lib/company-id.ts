import {isValid as isValidAlpha2CountryCode,} from 'i18n-iso-countries';

import {CompanyIdInfoModel} from "../types/company-id-info.model";
import {CompanyIdFactory} from "./company-id.factory";

export class CompanyId {
  static validate(countryCode: string, companyId: string): boolean {
    const info = CompanyId.info(countryCode, companyId);
    return info && info.valid;
  }

  static info(countryCode: string, companyId: string): CompanyIdInfoModel {
    if (!countryCode) {
      throw new Error('The country code is mandatory');
    }
    if (!companyId) {
      throw new Error('The company identifier is mandatory');
    }
    if (!isValidAlpha2CountryCode(countryCode)) {
      throw new Error('Invalid isoAlpha2 country code');
    }

    return CompanyIdFactory.info(countryCode, companyId);
  }
}
