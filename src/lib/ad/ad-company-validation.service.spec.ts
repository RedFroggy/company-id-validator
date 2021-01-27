import {CompanyInfo} from "../../types/company-info.model";

import {AdCompanyValidationService} from "./ad-company-validation.service";

describe('Andorra company validation', () => {

  const validationService = new AdCompanyValidationService();

  it('should validate NRT', () => {
    expect(validationService.validate('U-132950-X')).toBeTruthy();

    expect(validationService.validate("A-799999-X")).toBeTruthy();

    // Invalid length
    expect(validationService.validate('A123B')).toBeFalsy();

    // Invalid first digit
    expect(validationService.validate("I 706193 G")).toBeFalsy()

    // First digit cannot be a letter
    expect(validationService.validate("1-132950-X")).toBeFalsy();

    // If first digit is 'F', middle digits should be > 699999
    expect(validationService.validate("F-799999-X")).toBeFalsy();

    // If first digit is 'A' or 'L', middle digits should be
    // 699999 < middleDigits < 800000
    expect(validationService.validate("A-999999-X")).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyInfo = validationService.info('U-132950-X');
    expect(info).not.toBeNull();
  })
});
