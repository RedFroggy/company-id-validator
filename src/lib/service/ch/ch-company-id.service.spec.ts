import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {ChCompanyIdService} from "./ch-company-id.service";

describe('Switzerland company validation', () => {

  const validationService = new ChCompanyIdService();

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
    const info:CompanyIdInfoModel = validationService.info('CHE100155212');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.valid).toBeTruthy();
  });
});
