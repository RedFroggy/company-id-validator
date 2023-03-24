import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {AtCompanyIdService} from "./at-company-id.service";

describe('Austrian company validation', () => {

  const validationService = new AtCompanyIdService();

  it('should validate Austrian Company Register Numbers', () => {
    expect(validationService.validate('FN 122119m')).toBeTruthy();
    expect(validationService.validate('122119m')).toBeTruthy();
    expect(validationService.validate('m123123')).toBeFalsy();

    expect(validationService.validate('AT U10223006', {type: CompanyIdType.VAT})).toBeTruthy();
    expect(validationService.validate('ATU10223007', {type: CompanyIdType.VAT})).toBeFalsy();
    expect(validationService.validate('AT M10223006', {type: CompanyIdType.VAT})).toBeFalsy();
    expect(validationService.validate('AT U10KK3006', {type: CompanyIdType.VAT})).toBeFalsy();
    expect(validationService.validate('ATU10223007888', {type: CompanyIdType.VAT})).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyIdInfoModel = validationService.info('FN 122119m');
    expect(info).not.toBeNull();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.valid).toBeTruthy();
  });
});
