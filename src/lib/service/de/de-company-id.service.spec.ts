import {CompanyIdType} from "../../../types/company-id-type";
import {DeCompanyIdService} from "./de-company-id.service";
import {GERMAN_COURTS} from "./models/german-court.model";
import {GERMAN_REGISTRY_TYPES} from "./models/german-registry.model";

describe('German company validation unit tests', () => {

  const validationService = new DeCompanyIdService();
  const info = {type: CompanyIdType.LOCAL_COMPANY_ID};

  it('should validate Handelsregisternummer', () => {
    expect(validationService.validate('Aachen HRA 11223', info)).toBeTruthy();
    expect(validationService.validate('Frankfurt/Oder GnR 11223', info)).toBeTruthy();
    expect(validationService.validate('Aachen HRC 44123', info)).toBeFalsy();
  });

  it('should get DE company info by Handelsregisternummer', () => {
    let info = validationService.info('HRB3000');
    expect(info).toBeDefined();
    expect(info.valid).toBeTruthy();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID)
    expect(info.extraProperties.courts).toEqual(GERMAN_COURTS);
    expect(info.extraProperties.registryTypes).toEqual(GERMAN_REGISTRY_TYPES);

    info = validationService.info('Aachen HRA 11223');
    expect(info).toBeDefined();
    expect(info.valid).toBeTruthy();
  });

  it('should validate VAT number', () => {
    expect(validationService.validate('DE 136,695 976',
      {type: CompanyIdType.VAT})).toBeTruthy();
    expect(validationService.validate('DE136695976',
      {type: CompanyIdType.VAT})).toBeTruthy();

    expect(validationService.validate('136695978',
      {type: CompanyIdType.VAT})).toBeFalsy();
    expect(validationService.validate('DE13669597P',
      {type: CompanyIdType.VAT})).toBeFalsy();
    expect(validationService.validate('DE13669597698',
      {type: CompanyIdType.VAT})).toBeFalsy();
    expect(validationService.validate('DE036695976',
      {type: CompanyIdType.VAT})).toBeFalsy();
    expect(validationService.validate('DE036695976',
      {type: null})).toBeFalsy();
  });

  it('should get DE company info VAT vat number', () => {
    let info = validationService.info('DE136695976');
    expect(info).toBeDefined();
    expect(info.valid).toBeTruthy();
    expect(info.type).toBe(CompanyIdType.VAT)
    expect(info.extraProperties.courts).toEqual(GERMAN_COURTS);
    expect(info.extraProperties.registryTypes).toEqual(GERMAN_REGISTRY_TYPES);
  });
});
