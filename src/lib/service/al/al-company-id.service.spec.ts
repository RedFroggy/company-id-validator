import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {AlCompanyIdService} from "./al-company-id.service";

describe('Albania company validation', () => {

  const validationService = new AlCompanyIdService();

  it('should validate NIPT', () => {
    expect(validationService.validate('(AL) J 91402501 L')).toBeTruthy();
    expect(validationService.validate('AL J 91402501 L')).toBeTruthy();
    expect(validationService.validate('K22218003V')).toBeTruthy();

    expect(validationService.validate('(AL) J 91402501')).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyIdInfoModel = validationService.info('AL J 91402501 L');
    expect(info).not.toBeNull();
    expect(info.type).toBe(CompanyIdType.VAT);
    expect(info.valid).toBeTruthy();
  });
});
