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

  it('should calculate VAT from siren or siret', () => {
    expect(validationService.companyIdToVATNumber("802070748")).toBe("FR89802070748");
    expect(validationService.companyIdToVATNumber("80207074800016")).toBe("FR89802070748");
  });

  it('should calculate siren from VAT number', () => {
    expect(validationService.vatNumberToCompanyId("FR802070748")).toBe("802070748");
  });
});
