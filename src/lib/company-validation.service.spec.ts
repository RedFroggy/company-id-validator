import {CompanyInfo} from "../types/company-info.model";

import {CompanyValidationService} from "./company-validation.service";

class DefaultCompanyValidationService extends CompanyValidationService {
  info(companyId: string): CompanyInfo {
    return {companyId};
  }
}

describe('CompanyValidationService tests', () => {

  let validationService: CompanyValidationService;

  it('should sanitize country code', () => {
    validationService = new DefaultCompanyValidationService('fr');
    expect(validationService).not.toBeNull();
    expect(validationService.countryCode).toBe('FR');

    expect(validationService.sanitize(null)).toBeNull();
    expect(validationService.sanitize('802 070 748')).toBe('802070748');
    expect(validationService.sanitize('A-799999-X')).toBe('A799999X');
  });

  it('should validate company id', () => {
    validationService = new DefaultCompanyValidationService('fr');
    expect(validationService).not.toBeNull();
    expect(validationService.validate('802070748')).toBeFalsy();
  });

});
