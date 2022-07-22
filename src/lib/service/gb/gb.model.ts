import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";

export const COMPANY_GB_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "VAT (United Kingdom (and Isle of Man) VAT registration number)",
    name: "VAT",
    type: CompanyIdType.VAT,
    parentLevel: true,
    patterns: ["^GB[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}$"],
    description: "The VAT number can either be a 9-digit standard number, a 12-digit standard\n" +
      "number followed by a 3-digit branch identifier, a 5-digit number for\n" +
      "government departments (first two digits are GD) or a 5-digit number for\n" +
      "health authorities (first two digits are HA). The 9-digit variants use a\n" +
      "weighted checksum."
  },
  {
    fullName: "CRN (Company Registration Number)",
    name: "CRN",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    parentLevel: true,
    patterns: ["^GB[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}$"],
  }
]
