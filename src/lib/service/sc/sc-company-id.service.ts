import {CompanyIdService} from "../company-id.service";
import {COMPANY_SC_DATA} from "./sc.model";

export class ScCompanyIdService extends CompanyIdService {

  constructor() {
    super('SC', COMPANY_SC_DATA);
  }

  validate(companyId: string): boolean {
    return Boolean(this.sanitize(companyId));
  }
}
