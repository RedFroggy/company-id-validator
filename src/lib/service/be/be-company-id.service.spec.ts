import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {BeCompanyIdService} from "./be-company-id.service";

describe('Belgium company validation', () => {

  const validationService = new BeCompanyIdService();

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
    const info:CompanyIdInfoModel = validationService.info('BE403019261');
    expect(info).not.toBeNull();
    expect(info.countryName).toBe('Belgium');
    expect(info.type).toBe(CompanyIdType.VAT);
    expect(info.valid).toBeTruthy();
  });

  it('should calculate ondernemingsnummer from VAT number', () => {
    expect((validationService as any).vatNumberToCompanyId("BE428759497")).toBe("428759497");
  });
});
