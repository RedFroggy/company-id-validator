import {CompanyIdType} from "../../../types/company-id-type";
import {NiCompanyIdService} from "./ni-company-id.service";

describe('Northern ireland company validation', () => {

  const validationService = new NiCompanyIdService();

  it('should validate NI VAT number', () => {

    const companyInfo = {type: CompanyIdType.VAT};
    expect(validationService.validate('XI390874713', companyInfo)).toBeTruthy();
  });

  it('should get NI company info by VAT number', () => {
    const info = validationService.info('XI390874713');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.VAT);
  });

  it('should validate NI BRN', () => {
    expect(validationService.validate('NF123456')).toBeTruthy();
  });

  it('should get NI company info by BRN', () => {
    const info = validationService.info('NF123456');
    expect(info).toBeDefined();
    expect(info.valid).toBeTruthy();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
  });
});
