import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {FrCompanyIdService} from "./fr-company-id.service";

describe('French company validation', () => {

  const companyIdService = new FrCompanyIdService();

  it('should validate SIREN', () => {
    expect(companyIdService.validate("802070748")).toBeTruthy();
    expect(companyIdService.validate("802070749")).toBeFalsy();
  });

  it('should validate old format SIREN', () => {
    expect(companyIdService.validate("5720784")).toBeTruthy();
    expect(companyIdService.validate("5720785")).toBeFalsy();

    expect(companyIdService.validate("15450752")).toBeTruthy();
    expect(companyIdService.validate("15450753")).toBeFalsy();
  });

  it('should validate VAT number', () => {
    expect(companyIdService.validate("FR89802070748", {type: CompanyIdType.VAT})).toBeTruthy();
  });

  it('should validate SIRET', () => {
    expect(companyIdService.validate("80207074800016")).toBeTruthy();
    expect(companyIdService.validate("80207074909345")).toBeFalsy();
  });

  it('should calculate VAT from siren or siret', () => {
    expect(companyIdService.companyIdToVATNumber("802070748")).toBe("FR89802070748");
    expect(companyIdService.companyIdToVATNumber("80207074800016")).toBe("FR89802070748");
  });

  it('should calculate siren from VAT number', () => {
    expect(companyIdService.vatNumberToCompanyId("FR89802070748")).toBe("802070748");
  });

  it('should have info', () => {
    let info:CompanyIdInfoModel = companyIdService.info('802070748');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.countryName).toBe('France');
    expect(info.valid).toBeTruthy();

    info = companyIdService.info('80207074800016');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
    expect(info.valid).toBeTruthy();

    info = companyIdService.info('FR89802070748');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.VAT);
    expect(info.valid).toBeTruthy();
  });
});
