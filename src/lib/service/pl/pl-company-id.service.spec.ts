import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {PlCompanyIdService} from "./pl-company-id.service";

describe('Poland company id validation', () => {

  const validationService = new PlCompanyIdService();

  it('should validate VAT number', () => {
    expect(validationService.validate('PL 8567346215', {type: CompanyIdType.VAT})).toBeTruthy();
    expect(validationService.validate('PL 8567346216', {type: CompanyIdType.VAT})).toBeFalsy();

    // Invalid length
    expect(validationService.validate('PL 85673462156', {type: CompanyIdType.VAT})).toBeFalsy();
    // Not a number
    expect(validationService.validate('PL 8567Q46215', {type: CompanyIdType.VAT})).toBeFalsy();
  });

  it('should have VAT number info', () => {
    const info:CompanyIdInfoModel = validationService.info('PL 8567346215');
    expect(info).not.toBeNull();
    expect(info.countryName).toBe('Poland');
    expect(info.type).toBe(CompanyIdType.VAT);
    expect(info.valid).toBeTruthy();
  });

  it('should validate company id REGON number', () => {
    expect(validationService.validate('192598184', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeTruthy();
    expect(validationService.validate('123456785', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeTruthy();

    // Invalid length
    expect(validationService.validate('19259818498', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();
    expect(validationService.validate('192598183', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();
    // Invalid checksum
    expect(validationService.validate('12345678512347', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();
  });

  it('should have REGON number info', () => {
    const info:CompanyIdInfoModel = validationService.info('192598184');
    expect(info).not.toBeNull();
    expect(info.countryName).toBe('Poland');
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.valid).toBeTruthy();
  });
});
