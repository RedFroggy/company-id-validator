import {getCountry} from 'countries-db';

import {CompanyInfo} from "../types/company-info.model";

import {getValidator} from './company-register.util';
import {CompanyValidationService} from './company-validation.service';

export class CompanyValidation {
  static validate(countryCode: string, companyId: string): boolean {
    const info = this.info(countryCode, companyId);
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

    return getValidator(countryCode).info(companyId);
  }

  static getValidator(countryCode: string): CompanyValidationService {
    const validator: CompanyValidationService = getValidator(countryCode);

    if (!validator) {
      throw new Error('Unsupported countryCode: ' + countryCode);
    }

    return validator;
  }
}
