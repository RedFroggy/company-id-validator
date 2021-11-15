import {CompanyIdType} from "../types/company-id-type";
import {CompanyId} from './company-id';
import './service';

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
      CompanyId.validate('dess' as any, '802070749')
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

    const id = '802070748';
    const companyInfo = CompanyId.info('FR', id);

    expect(companyInfo).not.toBeNull();
    expect(companyInfo).toEqual({
      query: id,
      id: jasmine.anything(),
      sanitizedQuery: id,
      description: jasmine.anything(),
      fullName: jasmine.anything(),
      countryCode: 'FR',
      countryName: 'France',
      valid: true,
      trustedSourceUrl: jasmine.anything(),
      name: 'SIREN',
      parentLevel: true,
      pattern: jasmine.anything(),
      vatNumber: 'FR89802070748',
      type: CompanyIdType.LOCAL_COMPANY_ID
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
