import {CompanyInfo} from "../../types/company-info.model";
import {BeCompanyValidationService} from "./be-company-validation.service";

describe('Belgium company validation', () => {

  const validationService = new BeCompanyValidationService();

  it('should validate ondernemingsnummer', () => {
    expect(validationService.validate('BE403019261')).toBeTruthy();
    expect(validationService.validate('(0)403019261')).toBeTruthy();
    expect(validationService.validate('BE 428759497')).toBeTruthy();

    // Wrong check digit
    expect(validationService.validate('BE431150351')).toBeFalsy();
    expect(validationService.validate('BE43115035143')).toBeFalsy();

    // Wrong length
    expect(validationService.validate('(0)403019262')).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyInfo = validationService.info('BE403019261');
    expect(info).not.toBeNull();
  });

  it('should return parent company id', () => {
    expect(validationService.toParentCompanyId('BE403019261')).toBe('BE403019261');
  })
});
