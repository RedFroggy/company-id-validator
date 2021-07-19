import {getCountry} from 'countries-db';

import {CompanyInfo} from "../types/company-info.model";

import {CompanyIdService} from './company-id.service';

export class CompanyId {
  static VALIDATORS: {isoAlpha2countryCode: string, instance: CompanyIdService}[] = [];
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
    if (getCountry(countryCode) == null) {
      throw new Error('Invalid isoAlpha2 country code');
    }

    return CompanyId.getValidator(countryCode).info(companyId);
  }

  static getValidator(countryCode: string): CompanyIdService {
    const validator: CompanyIdService = CompanyId.VALIDATORS[countryCode];

    if (!validator) {
      throw new Error('Unsupported countryCode: ' + countryCode);
    }

    return validator;
  }
}
