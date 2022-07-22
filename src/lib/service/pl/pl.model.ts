import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";

export const COMPANY_PL_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "NIP (Numer Identyfikacji Podatkowej, Polish VAT number)",
    name: "NIP",
    type: CompanyIdType.VAT,
    parentLevel: true,
    patterns: ["^PL[ \\.\\-]?[0-9]{10}$"],
    description: "The NIP (Numer Identyfikacji Podatkowej) number consists of 10 digit"
  },
  {
    fullName: "REGON (Rejestr Gospodarki Narodowej, Polish register of economic units)",
    name: "REGON",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    parentLevel: true,
    patterns: ["^(\\d{10}|\\d{9}|\\d{14})$"],
    trustedSourceUrl: "https://bip.stat.gov.pl/en/regon/",
    description: "The REGON (Rejestr Gospodarki Narodowej) is a statistical identification\n" +
      "number for businesses. National entities are assigned a 9-digit number, while\n" +
      "local units append 5 digits to form a 14-digit number."
  }
];
