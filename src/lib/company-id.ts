import {getCountry} from 'countries-db';

import {CompanyInfo} from "../types/company-info.model";

import {CompanyIdService} from './company-id.service';
import {IocContainer} from "./ioc-container";

export class CompanyId {

  static validate(countryCode: string, companyId: string): boolean {
    const info = CompanyId.info(countryCode, companyId);
    return info && info.valid;
  }

  static info(countryCode: string, companyId: string): CompanyInfo {
    if (!countryCode) {
      throw new Error('The country code is mandatory');
    }
    if (!companyId) {
      throw new Error('The company identifier is mandatory');
    }
    if (!getCountry(countryCode)) {
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
