import {CompanyInfo} from "../../../types/company-info.model";
import {ChCompanyValidationService} from "./ch-company-validation.service";

describe('Switzerland company validation', () => {

  const validationService = new ChCompanyValidationService();

  it('should validate swiss UID', () => {
    expect(validationService.validate('CHE100155212')).toBeTruthy();


    // Wrong check digit
    expect(validationService.validate('CHE-100.155.213')).toBeFalsy();

    // Wrong format
    expect(validationService.validate('CHE-4100.155.212')).toBeFalsy();

    // Not digit number
    expect(validationService.validate('CHE10R155212')).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyInfo = validationService.info('CHE100155212');
    expect(info).not.toBeNull();
  });

  it('should return parent company id', () => {
    expect(validationService.toParentCompanyId('CHE100155212')).toBe('CHE100155212');
  })
});
