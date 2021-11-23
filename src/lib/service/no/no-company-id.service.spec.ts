import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {NoCompanyIdService} from "./no-company-id.service";

describe('Norwegian company id validation', () => {

  const companyIdService = new NoCompanyIdService();

  it('should validate Organisasjonsnummer', () => {
    expect(companyIdService.validate("988 077 917", {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeTruthy();
    expect(companyIdService.validate("988 077 918", {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();

    // Invalid length
    expect(companyIdService.validate("988 077 9188", {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();
    // Not a number
    expect(companyIdService.validate("988 077 91D", {type: CompanyIdType.LOCAL_COMPANY_ID})).toBeFalsy();
  });

  it('should have info', () => {
    let info:CompanyIdInfoModel = companyIdService.info('988 077 917');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.countryName).toBe('Norway');
    expect(info.valid).toBeTruthy();
  });

  it('should validate VAT number', () => {
    expect(companyIdService.validate("NO 995 525 828 MVA", {type: CompanyIdType.VAT})).toBeTruthy();
    expect(companyIdService.validate("NO 995 525 829 MVA", {type: CompanyIdType.VAT})).toBeFalsy();
  });

  it('should have info with VAT number', () => {
    let info:CompanyIdInfoModel = companyIdService.info('NO 988 077 917 MVA');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.VAT);
    expect(info.countryName).toBe('Norway');
    expect(info.valid).toBeTruthy();
  });
});
