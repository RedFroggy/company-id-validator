import {FrCompanyValidationService} from "./fr-company-validation.service";

describe('French company validation', () => {

  const validationService = new FrCompanyValidationService();

  it('should validate SIREN', () => {
    expect(validationService.validate("802070748")).toBeTruthy();
    expect(validationService.validate("802070749")).toBeFalsy();
  });

  it('should validate SIRET', () => {
    expect(validationService.validate("80207074800016")).toBeTruthy();
    expect(validationService.validate("80207074909345")).toBeFalsy();
  });
});
