import {
  Alpha2Code,
  isValid as isValidAlpha2CountryCode
} from 'i18n-iso-countries';

import {CompanyIdInfoModel} from "../types/company-id-info.model";

import {CompanyIdService} from './service/company-id.service';
import {IocContainer} from "./ioc-container";

export class CompanyId {

  static validate(countryCode: Alpha2Code, companyId: string): boolean {
    const info = CompanyId.info(countryCode, companyId);
    return info && info.valid;
  }

  static info(countryCode: Alpha2Code, companyId: string): CompanyIdInfoModel {
    if (!countryCode) {
      throw new Error('The country code is mandatory');
    }
    if (!companyId) {
      throw new Error('The company identifier is mandatory');
    }
    if (!isValidAlpha2CountryCode(countryCode)) {
      throw new Error('Invalid isoAlpha2 country code');
    }

    const validator: CompanyIdService = IocContainer
      .findByName(`${countryCode.toLowerCase()}companyidservice`);

    if (!validator) {
      throw new Error('Unsupported countryCode: ' + countryCode);
    }

    return validator.info(companyId);
  }
}
