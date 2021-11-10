import {CnCompanyIdService} from "./cn-company-id.service";

describe('Chinese company validation', () => {

  const validationService = new CnCompanyIdService();

  it('should validate USCC', () => {
    expect(validationService.validate('91110000600037341L')).toBeTruthy();

    // Invalid check digit
    expect(validationService.validate('91110000600037341M')).toBeFalsy();

    // Invalid format
    expect(validationService.validate('911100006000341L')).toBeFalsy();
  });

});
