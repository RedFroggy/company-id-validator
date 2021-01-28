import {CompanyValidation} from './company-validation';
import {CompanyValidationBuilder} from './company-validation.builder';

describe('Company validation tests', () => {

  const builder: CompanyValidationBuilder = CompanyValidation
    .builder()
    .withCountryCode('FR');

  it('should validate', () => {
    expect(builder.withCompanyId('802070748').build()
      .validate()).toBeTruthy();
  });

  it('should not validate', () => {
    expect(builder.withCompanyId('802070749').build()
      .validate()).toBeFalsy();

    // Should raise exception for an invalid country code
    try {
      builder.withCountryCode('dess').withCompanyId('802070749').build();
    } catch (error) {
      expect(error.message).toBe('Not a valid ISO Alpha2 country code');
    }
  });

  it('should get info from country code', () => {

    const companyInfo = builder
      .withCountryCode('FR')
      .withCompanyId("802070748")
      .build().info();

    expect(companyInfo).not.toBeNull();
    expect(companyInfo.countryCode).toBe('FR');
    expect(companyInfo.valid).toBeTruthy();
    expect(companyInfo.trustedSourceUrl).toBeDefined();
    expect(companyInfo.companyIdName).toBe("SIREN");
  });
});
