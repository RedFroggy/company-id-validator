import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";

export const COMPANY_SC_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Business Registration Number",
    name: "BRN",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    parentLevel: true,
    patterns: ["^(SA|SZ|SF|GS|SL|SO|SC|ES)[0-9]{6}$"]
  }
];
