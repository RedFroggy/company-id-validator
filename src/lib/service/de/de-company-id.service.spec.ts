import {DeCompanyIdService} from "./de-company-id.service";

describe('German company validation unit tests', () => {

  const validationService = new DeCompanyIdService();

  it('should validate Handelsregisternummer', () => {
    expect(validationService.validate('Aachen HRA 11223')).toBeTruthy();
    expect(validationService.validate('Frankfurt/Oder GnR 11223')).toBeTruthy();
    expect(validationService.validate('Aachen HRC 44123')).toBeFalsy();
  });
});
