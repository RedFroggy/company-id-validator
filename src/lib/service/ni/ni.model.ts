import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";

export const COMPANY_NI_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "VAT Number",
    name: "VAT",
    type: CompanyIdType.VAT,
    parentLevel: true,
    pattern: "^XI[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}$",
  },
  {
    fullName: "Business Registration Number",
    name: "BRN",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    parentLevel: true,
    pattern: "^(NA|NZ|NF|GN|NL|NC|R0|NI|EN)[0-9]{6}$",
  }
]
