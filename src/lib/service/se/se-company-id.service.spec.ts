import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {SeCompanyIdService} from "./se-company-id.service";

describe('Swedish company validation', () => {

  const validationService = new SeCompanyIdService();

  it('should validate Organisationsnummer', () => {
    expect(validationService.validate('1234567897', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeTruthy();
    expect(validationService.validate('1234567898', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();

    // Invalid length
    expect(validationService.validate('12345678977', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();
    // Not a number
    expect(validationService.validate('1234567L97', {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();
  });

  it('should have info', () => {
    const info:CompanyIdInfoModel = validationService.info('1234567897');
    expect(info).not.toBeNull();
    expect(info.countryName).toBe('Sweden');
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.valid).toBeTruthy();
  });

  it('should validate VAT number', () => {
    expect(validationService.validate("SE 123456789701", {type: CompanyIdType.VAT})).toBeTruthy();
    expect(validationService.validate("SE 123456779701", {type: CompanyIdType.VAT})).toBeFalsy();
  });

  it('should have info with VAT number', () => {
    let info:CompanyIdInfoModel = validationService.info('SE 123456789701');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.VAT);
    expect(info.countryName).toBe('Sweden');
    expect(info.valid).toBeTruthy();
  });
});
