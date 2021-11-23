import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";

export const COMPANY_NO_DATA: CompanyIdInfoModel[] = [
  {
    name: "Organisasjonsnummer",
    fullName: "Orgnr (Organisasjonsnummer, Norwegian organisation number)",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: "The Organisasjonsnummer is a 9-digit number",
    trustedSourceUrl: "https://no.wikipedia.org/wiki/Organisasjonsnummer",
    pattern: "^[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}$",
    parentLevel: true
  },
  {
    name: "VAT number",
    fullName: "MVA (Merverdiavgift, Norwegian VAT number)",
    type: CompanyIdType.VAT,
    description: "The VAT number is the standard Norwegian organisation number\n" +
      "(Organisasjonsnummer) with 'MVA' as suffix.",
    pattern: "^NO\\s?[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}\\s?MVA$",
    parentLevel: true
  }
];
