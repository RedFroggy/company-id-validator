import {CompanyIdType} from "../../../types/company-id-type";
import {ScCompanyIdService} from "./sc-company-id.service";

describe('United kingdom company validation', () => {

  const validationService = new ScCompanyIdService();

  it('should validate SC BRN', () => {
    expect(validationService.validate('SC123456')).toBeTruthy();
  });

  it('should get SC company info', () => {
    const info = validationService.info('SC123456');
    expect(info).toBeDefined();
    expect(info.valid).toBeTruthy();
    expect(info.type).toBe(CompanyIdType.LOCAL_COMPANY_ID);
  });
});
