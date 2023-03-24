import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_AL_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "NIPT (Numri i Identifikimit për Personin e Tatueshëm, Albanian VAT number)",
    name: "NIPT",
    type: CompanyIdType.VAT,
    trustedSourceUrl: "https://www.vatify.eu/albania-vat-number.html",
    parentLevel: true,
    patterns: [
      "^\\(?AL\\)?[ \\.\\-]?[JKL][ \\.\\-]?[0-9]{8}[ \\.\\-]?[A-Z]$",
      "^[JKL][ \\.\\-]?[0-9]{8}[ \\.\\-]?[A-Z]$"
    ],
    description: "The Albanian NIPT is a 10-digit number with the first and last character being letters"
  }
];
