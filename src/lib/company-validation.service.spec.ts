import {COMPANY_AD_DATA} from "../data/ad/ad.model";
import {COMPANY_FR_DATA} from "../data/fr/fr.model";

import {CompanyValidationService} from "./company-validation.service";

class DefaultCompanyValidationService extends CompanyValidationService {
  validate(companyId: string): boolean {
    return Boolean(companyId);
  }

  toVatNumber(companyId?: string) {
    return companyId;
  }

  toParentCompanyId(companyId: string): string {
    return companyId;
  }
}

describe('CompanyValidationService tests', () => {

  let validationService: CompanyValidationService;

  beforeEach(() => {
    validationService = new DefaultCompanyValidationService('fr', COMPANY_FR_DATA);
    jest.spyOn(validationService, 'validate').mockReturnValue(true);
  })

  it('should sanitize country code', () => {
    expect(validationService).not.toBeNull();
    expect((validationService as any).countryCode).toBe('FR');

    expect(validationService.sanitize(null)).toBeNull();
    expect(validationService.sanitize('802 070 748')).toBe('802070748');
    expect(validationService.sanitize('A-799999-X')).toBe('A799999X');
  });

  it('should not validate if no country info', () => {
    validationService = new DefaultCompanyValidationService('fr', null);
    expect(validationService.info('802070748')).toEqual({
      companyId: '802070748',
      valid: false,
      sanitizedCompanyId: '802070748'
    });

    validationService = new DefaultCompanyValidationService('FR', COMPANY_FR_DATA);
    jest.spyOn(validationService, 'validate').mockReturnValue(false);
    expect(validationService.info('802070748099')).toEqual({
      companyId: '802070748099',
      valid: false,
      sanitizedCompanyId: '802070748099'
    });
  });

  it('should validate single company identifier', () => {
    validationService = new DefaultCompanyValidationService('fr', COMPANY_AD_DATA);
    jest.spyOn(validationService, 'validate').mockReturnValue(true);
    expect(validationService).not.toBeNull();
    expect(validationService.info('A-799999-X').valid).toBeTruthy();
  });

  it('should validate parent company id', () => {
    expect(validationService).not.toBeNull();
    expect(validationService.info('802070748').valid).toBeTruthy();
  });

  it('should validate child company id', () => {
    expect(validationService).not.toBeNull();
    expect(validationService.info('80207074800016').valid).toBeTruthy();
  });

});