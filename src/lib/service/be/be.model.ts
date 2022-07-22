import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_BE_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "ondernemingsnummer (Belgian enterprise number)",
    name: "ondernemingsnummer",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    patterns: ["^[01]?[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}$"],
    parentLevel: true,
    description: "BTW, TVA, NWSt, ondernemingsnummer (Belgian enterprise number).\nThe enterprise number (ondernemingsnummer) is a unique identifier of\ncompanies within the Belgian administrative services. It was previously\nthe VAT ID number. The number consists of 10 digits."
  },
  {
    fullName: "VAT number",
    type: CompanyIdType.VAT,
    name: "VAT",
    patterns: ["^BE[ \\.\\-]?[01]?[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}$"],
    parentLevel: true
  }
];
