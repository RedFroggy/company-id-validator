import {CompanyIdType} from "../../types/company-id-type";
import {CompanyIdService} from "./company-id.service";
import {COMPANY_AD_DATA} from "./ad/ad.model";
import {COMPANY_FR_DATA} from "./fr/fr.model";

class DefaultCompanyValidationService extends CompanyIdService {
  validate(companyId: string): boolean {
    return Boolean(companyId);
  }

  protected companyIdToVATNumber(companyId?: string): string {
    super.companyIdToVATNumber(companyId);
    return this.countryCode + companyId;
  }

  protected vatNumberToCompanyId(vatNumber?: string): string {
    super.vatNumberToCompanyId(vatNumber);
    return vatNumber.substring(4);
  }
}

describe('CompanyValidationService tests', () => {

  let validationService: CompanyIdService;

  beforeEach(() => {
    validationService = new DefaultCompanyValidationService('FR', COMPANY_FR_DATA);
    jest.spyOn(validationService, 'validate').mockReturnValue(true);
  })

  it('should sanitize country code', () => {
    expect(validationService).not.toBeNull();
    expect((validationService as any).countryCode).toBe('FR');

    expect(validationService.sanitize(null)).toBeNull();
    expect(validationService.sanitize('802 070 748')).toBe('802070748');
    expect(validationService.sanitize('A-799999-X')).toBe('A799999X');
  });

  it('should not validate if no country info', () => {
    validationService = new DefaultCompanyValidationService('FR', null);
    expect(validationService.info('802070748')).toEqual({
      countryCode: 'FR',
      query: '802070748',
      valid: false,
      sanitizedQuery: '802070748'
    });

    validationService = new DefaultCompanyValidationService('FR', COMPANY_FR_DATA);
    jest.spyOn(validationService, 'validate').mockReturnValue(false);
    expect(validationService.info('802070748099')).toEqual({
      countryCode: 'FR',
      query: '802070748099',
      valid: false,
      sanitizedQuery: '802070748099'
    });
  });

  it('should validate single company identifier', () => {
    validationService = new DefaultCompanyValidationService('FR', COMPANY_AD_DATA);
    jest.spyOn(validationService, 'validate').mockReturnValue(true);
    expect(validationService).not.toBeNull();
    expect(validationService.info('U-132950-X').valid).toBeTruthy();
  });

  it('should validate parent company id', () => {
    expect(validationService).not.toBeNull();
    expect(validationService.info('802070748')).toEqual({
      id: '802070748',
      name: 'SIREN',
      fullName: "Système d'Identification du Répertoire des Entreprises",
      description: jasmine.anything(),
      trustedSourceUrl: jasmine.anything(),
      parentLevel: true,
      patterns: [jasmine.anything(), jasmine.anything()],
      countryCode: 'FR',
      countryName: 'France',
      query: '802070748',
      valid: true,
      sanitizedQuery: '802070748',
      vatNumber: 'FR802070748',
      type: CompanyIdType.LOCAL_COMPANY_ID
    });
  });

  it('should validate VAT number', () => {
    expect(validationService).not.toBeNull();
    expect(validationService.info('FR89802070748')).toEqual({
      id: '802070748',
      name: 'VAT',
      fullName: "Numéro de TVA intracommunautaire",
      description: jasmine.anything(),
      trustedSourceUrl: jasmine.anything(),
      parentLevel: true,
      patterns: [jasmine.anything()],
      countryCode: 'FR',
      countryName: 'France',
      query: 'FR89802070748',
      valid: true,
      sanitizedQuery: 'FR89802070748',
      vatNumber: 'FR89802070748',
      type: CompanyIdType.VAT
    });
  });

  it('should validate child company id', () => {
    expect(validationService).not.toBeNull();
    expect(validationService.info('80207074800016').valid).toBeTruthy();
    expect((validationService as any).toParentCompanyId('80207074800016')).toBeNull();
  });

  it('should get VAT number', () => {
    expect((validationService as any).companyIdToVATNumber('802070748')).toBe('FR802070748');
  });

});
