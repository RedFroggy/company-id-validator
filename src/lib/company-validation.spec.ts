import {CompanyValidation} from './company-validation';

describe('Company validation tests', () => {

  it('should validate', () => {
    expect(CompanyValidation.validate('FR', '802070748')).toBeTruthy();
  });

  it('should not validate if missing company identifier', () => {
    try {
      CompanyValidation.validate('FR', null)
    } catch (error) {
      expect(error.message).toBe('The company identifier is mandatory');
    }
  });

  it('should not validate if missing country code', () => {
    try {
      CompanyValidation.validate(null, '802070749')
    } catch (error) {
      expect(error.message).toBe('The country code is mandatory');
    }
  });

  it('should not validate if unrecognized country code', () => {
    expect(CompanyValidation.validate('FR', '802070749')).toBeFalsy();

    try {
      CompanyValidation.validate('dess', '802070749')
    } catch (error) {
      expect(error.message).toBe('Invalid isoAlpha2 country code');
    }
  });

  it('should not validate if unsupported country code', () => {
    expect(CompanyValidation.validate('FR', '802070749')).toBeFalsy();

    try {
      CompanyValidation.validate('AR', '802070749')
    } catch (error) {
      expect(error.message).toBe('Unsupported countryCode: AR');
    }
  });

  it('should get info from country code', () => {

    const companyInfo = CompanyValidation.info('FR', '802070748');

    expect(companyInfo).not.toBeNull();
    expect(companyInfo.countryCode).toBe('FR');
    expect(companyInfo.valid).toBeTruthy();
    expect(companyInfo.trustedSourceUrl).toBeDefined();
    expect(companyInfo.companyIdName).toBe("SIREN");
  });
});
