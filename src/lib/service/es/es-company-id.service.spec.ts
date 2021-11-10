import {EsCompanyIdService} from "./es-company-id.service";
import {COMPANY_ES_DATA} from "./es.model";

describe('Spanish company validation', () => {

  const companyInfo = COMPANY_ES_DATA[0];
  const validationService = new EsCompanyIdService();

  it('should not validate if identifier type is unknown', () => {
    expect(validationService.validate('J99216582')).toBeFalsy();
    expect(validationService.validate('J99216582', {name: 'UNKNOWN'})).toBeFalsy();
  });

  it('should validate CIF', () =>  {
    expect(validationService.validate('J99216582', companyInfo)).toBeTruthy();
    expect(validationService.validate('A08437642', companyInfo)).toBeTruthy();
    expect(validationService.validate('Q0818003F', companyInfo)).toBeTruthy();

    // Invalid check digit
    expect(validationService.validate('J99216583', companyInfo)).toBeFalsy();

    // Too long format
    expect(validationService.validate('J992165831', companyInfo)).toBeFalsy();

    // Valid NIF but not valid CIF
    expect(validationService.validate('M-1234567-L', companyInfo)).toBeFalsy();

    // Invalid first character
    expect(validationService.validate('O-1234567-L', companyInfo)).toBeFalsy();
  });
});
