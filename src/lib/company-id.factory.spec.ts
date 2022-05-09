import {CompanyIdFactory} from "./company-id.factory";
import {CompanyIdService} from "./service/company-id.service";

describe('CompanyIdFactory unit tests', () => {

  it('should create instance based on country code', () => {

    const countries = ['AD', 'BE', 'CH', 'CN', 'DE', 'ES', 'FR',
      'GB', 'IT', 'JP', 'NI', 'NO', 'PL', 'SC', 'SE'];

    jest.spyOn(CompanyIdService.prototype, 'info').mockReturnValue({});

    countries.forEach((countryCode) => {
      expect(CompanyIdFactory.info(countryCode, 'anId')).toBeDefined();
    });

    expect(CompanyIdService.prototype.info).toHaveBeenCalledTimes(countries.length);
  });

  it('should raise en error for unsupported country code', () => {

    try {
      CompanyIdFactory.info('GG', '');
      fail();
    }
    catch (error) {
      expect(error.message).toBe('Unsupported countryCode: GG');
    }
  });
});
