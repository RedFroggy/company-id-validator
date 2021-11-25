import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {JpCompanyIdService} from "./jp-company-id.service";

describe('Japanese company validation', () => {

  const validationService = new JpCompanyIdService();

  it('should validate Corporate Number', () => {
    expect(validationService.validate('5835678256246')).toBeTruthy();

    // Invalid check digit
    expect(validationService.validate('5835678256247')).toBeFalsy();

    // Invalid length
    expect(validationService.validate('583567825624655')).toBeFalsy();

    // Not a number
    expect(validationService.validate('5835678256M46')).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyIdInfoModel = validationService.info('5835678256246');
    expect(info).not.toBeNull();
    expect(info.countryName).toBe('Japan');
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.valid).toBeTruthy();
  });
});
