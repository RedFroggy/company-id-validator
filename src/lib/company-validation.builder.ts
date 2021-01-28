import {getCountry} from 'countries-db';

import {CompanyValidation} from './company-validation';

export class CompanyValidationBuilder {
  private $countryCode: string;
  private $companyId: string;

  get countryCode(): string {
    return this.$countryCode;
  }

  get companyId(): string {
    return this.$companyId;
  }

  withCountryCode(countryCode: string): CompanyValidationBuilder {
    this.$countryCode = this.sanitize(countryCode);
    return this;
  }

  withCompanyId(companyId: string): CompanyValidationBuilder {
    this.$companyId = this.sanitize(companyId);
    return this;
  }

  build(): CompanyValidation {
    if (getCountry(this.countryCode) == null) {
      throw new Error('Not a valid ISO Alpha2 country code');
    }
    return new CompanyValidation(this);
  }

  private sanitize(value): string {
    return value
      .replace(/\s+/g,'')
      .trim()
      .toUpperCase();
  }
}
