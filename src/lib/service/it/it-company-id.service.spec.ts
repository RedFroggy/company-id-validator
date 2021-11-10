import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {ItCompanyIdService} from "./it-company-id.service";

describe('French company validation', () => {

  const validationService = new ItCompanyIdService();

  it('should validate Partita IVA', () => {
    expect(validationService.validate("00743110157")).toBeTruthy();
    expect(validationService.validate("IT 00743110157")).toBeTruthy();
    expect(validationService.validate("IT 00743118887")).toBeTruthy();

    // Invalid length
    expect(validationService.validate("IT 007431101579")).toBeFalsy();

    // Not a number
    expect(validationService.validate("IT 0074311015D")).toBeFalsy();
    expect(validationService.validate("IT 00000000157")).toBeFalsy();

    // Invalid check digit
    expect(validationService.validate("IT 00743110158")).toBeFalsy();

    // Invalid first part digit
    expect(validationService.validate("IT 00743110007")).toBeFalsy();
    expect(validationService.validate("IT 00743114157")).toBeFalsy();
    expect(validationService.validate("IT 00743114157")).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyIdInfoModel = validationService.info('IT00743110157');
    expect(info).not.toBeNull();
  });

  it('italian company identifier and VAT number are the same', () => {
    expect((validationService as any).vatNumberToCompanyId("IT00743110157")).toBe("IT00743110157");
  });
});
