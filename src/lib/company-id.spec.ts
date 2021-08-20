import {CompanyId} from './company-id';
import './validators';

describe('Company validation tests', () => {
  it('should validate', () => {
    expect(CompanyId.validate('FR', '802070748')).toBeTruthy();
  });

  it('should not validate if missing company identifier', () => {
    try {
      CompanyId.validate('FR', null)
    } catch (error) {
      expect(error.message).toBe('The company identifier is mandatory');
    }
  });

  it('should not validate if missing country code', () => {
    try {
      CompanyId.validate(null, '802070749')
    } catch (error) {
      expect(error.message).toBe('The country code is mandatory');
    }
  });

  it('should not validate if unrecognized country code', () => {
    expect(CompanyId.validate('FR', '802070749')).toBeFalsy();

    try {
      CompanyId.validate('dess', '802070749')
    } catch (error) {
      expect(error.message).toBe('Invalid isoAlpha2 country code');
    }
  });

  it('should not validate if unsupported country code', () => {
    expect(CompanyId.validate('FR', '802070749')).toBeFalsy();

    try {
      CompanyId.validate('AR', '802070749')
    } catch (error) {
      expect(error.message).toBe('Unsupported countryCode: AR');
    }
  });

  it('should not validate if with invalid company id format', () => {
    expect(CompanyId.validate('FR', '8020707488')).toBeFalsy();
  });

  it('should get info from country code', () => {

    const companyId = '802070748';
    const companyInfo = CompanyId.info('FR', companyId);

    expect(companyInfo).not.toBeNull();
    expect(companyInfo).toEqual({
      query: companyId,
      companyId,
      sanitizedQuery: companyId,
      companyIdDescription: jasmine.anything(),
      companyIdFullName: jasmine.anything(),
      countryCode: 'FR',
      valid: true,
      trustedSourceUrl: jasmine.anything(),
      companyIdName: 'SIREN',
      parentLevel: true,
      pattern: jasmine.anything(),
      vatNumber: 'FR89' + companyId
    });
  });

  it('should get validator based on country code', () => {
   const validationService = CompanyId.info('FR', '802070748');
   expect(validationService).not.toBeNull();
   expect((validationService as any).countryCode).toBe('FR');
  });

  it('should not get validator for unsupported country', () => {
    try {
      CompanyId.validate('AR', '802070749')
    } catch (error) {
      expect(error.message).toBe('Unsupported countryCode: AR');
    }
  });
});
