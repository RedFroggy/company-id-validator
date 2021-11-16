import {CompanyIdType} from "../../../types/company-id-type";
import {GbCompanyIdService} from "./gb-company-id.service";

describe('United kingdom company validation', () => {

  const validationService = new GbCompanyIdService();

  it('should validate GB VAT number', () => {

    const companyInfo = {type: CompanyIdType.VAT};

    expect(validationService.validate('GB 980 7806 84', companyInfo)).toBeTruthy();
    expect(validationService.validate('XI390874713', companyInfo)).toBeTruthy();

    // Wrong check digit
    expect(validationService.validate('802311781', companyInfo)).toBeFalsy();

    // Invalid checksum
    expect(validationService.validate('GB980780685', companyInfo)).toBeFalsy();

    // Invalid digit
    expect(validationService.validate('8068M', companyInfo)).toBeFalsy();

    // Invalid digits
    expect(validationService.validate('GD88888067Q', companyInfo)).toBeFalsy();

    // Invalid check digit
    expect(validationService.validate('GD888880678', companyInfo)).toBeFalsy();

    // Invalid digits
    expect(validationService.validate('GB 980 7806 8F', companyInfo)).toBeFalsy();

    // invalid checksum
    expect(validationService.validate('GB 009 7806 84', companyInfo)).toBeFalsy();

    // invalid length
    expect(validationService.validate('GB 009 7806 84 9899 0909', companyInfo)).toBeFalsy();
  });

  it('should get GB company info by VAT number', () => {
    const info = validationService.info('GB 980 7806 84');
    expect(info).toBeDefined();
    expect(info.type).toBe(CompanyIdType.VAT);
  });

  it('should validate GB CRN', () => {
    expect(validationService.validate('02282265')).toBeTruthy();
  });

  it('should get GB company info by CRN', () => {
    const info = validationService.info('02282265');
    expect(info).toBeDefined();
  });
})
