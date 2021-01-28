import {CompanyInfo} from "../types/company-info.model";

import {getValidator} from './company-register.util';
import {CompanyValidationBuilder} from './company-validation.builder';
import {CompanyValidationService} from './company-validation.service';

export class CompanyValidation {
  private readonly countryCode: string;
  private readonly companyId: string;
  constructor(builder: CompanyValidationBuilder) {
    this.countryCode = builder.countryCode;
    this.companyId = builder.companyId;
  }

  static builder(): CompanyValidationBuilder {
    return new CompanyValidationBuilder();
  }

  validate(): boolean {
    const info = this.info();
    return info && info.valid;
  }

  info(): CompanyInfo {
    const validator: CompanyValidationService = getValidator(this.countryCode);
    return validator.info(this.companyId);
  }
}
