import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {Injectable} from "../../injectable.decorator";
import {GbCompanyIdService} from "../gb/gb-company-id.service";
import {COMPANY_NI_DATA} from "./ni.model";

@Injectable
export class NiCompanyIdService extends GbCompanyIdService {

  constructor() {
    super();
    this.countryCode = 'NI';
    this.infos = COMPANY_NI_DATA;
  }

  validate(companyId: string, companyInfo?: CompanyIdInfoModel): boolean {
    if (companyId.startsWith('XI')) {
      return super.validate(companyId, companyInfo);
    }
    return true;
  }
}
