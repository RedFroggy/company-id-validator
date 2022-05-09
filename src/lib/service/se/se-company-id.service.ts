import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdService} from "../company-id.service";
import {LuhnUtils} from "../utils/luhn.utils";
import {COMPANY_SE_DATA} from "./se.model";

export class SeCompanyIdService extends CompanyIdService {
  constructor() {
    super('SE', COMPANY_SE_DATA);
  }

  public validate(companyId: string, companyIdInfo: CompanyIdInfoModel): boolean {
    let sanitizedCompanyId = this.sanitize(companyId);

    if (companyIdInfo.type === CompanyIdType.VAT) {
      sanitizedCompanyId = sanitizedCompanyId
        .replace(this.countryCode, '');

      sanitizedCompanyId = sanitizedCompanyId.substr(0, sanitizedCompanyId.length - 2);
    }

    if (sanitizedCompanyId.length !== 10
      || !Number.isInteger(Number(sanitizedCompanyId))) {
      return false;
    }

    return LuhnUtils.validate(sanitizedCompanyId);
  }
}
