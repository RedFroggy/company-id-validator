import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdService} from "../company-id.service";
import {COMPANY_NO_DATA} from "./no.model";

export class NoCompanyIdService extends CompanyIdService {
  constructor() {
    super('NO', COMPANY_NO_DATA);
  }

  validate(companyId: string, companyIdInfo: CompanyIdInfoModel): boolean {
    let sanitizedCompanyId = this.sanitize(companyId);

    if (companyIdInfo.type === CompanyIdType.VAT) {
      sanitizedCompanyId = sanitizedCompanyId.replace(this.countryCode, '')
        .replace('MVA', '');
    }

    if (sanitizedCompanyId.length !== 9 || !Number.isInteger(Number(sanitizedCompanyId))) {
      return false;
    }

    const digits: number[] = sanitizedCompanyId.split("").map(d => Number(d));
    const weights = [3, 2, 7, 6, 5, 4, 3, 2, 1];

    let total = 0;
    for(let i=0; i< digits.length; i++) {
      total += digits[i] * weights[i];
    }

    return (total % 11) === 0;
  }
}
