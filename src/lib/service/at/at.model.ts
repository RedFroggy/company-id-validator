import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_AT_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Austrian Company Register Numbers",
    name: "ACRN",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    trustedSourceUrl: "https://www.vatify.eu/austria-vat-number.html#:~:text=Companies%20in%20Austria%20are%20issued,UID)%20when%20registering%20for%20VAT.",
    parentLevel: true,
    patterns: [
      "^FN[ \\.\\-]?[0-9]*[a-zA-Z]{1}$",
      "^[0-9]*[a-zA-Z]{1}$"
    ],
    description: "The Austrian company register number consist of digits followed by a single letter, e.g. \"122119m\". Sometimes it is presented with preceding \"FN\", e.g. FN 122119m"
  },
  {
    fullName: "UID (Umsatzsteuer-Identifikationsnummer, Austrian VAT number)",
    name: "UID",
    type: CompanyIdType.VAT,
    trustedSourceUrl: "https://de.wikipedia.org/wiki/Umsatzsteuer-Identifikationsnummer",
    parentLevel: true,
    patterns: [
      "^AT[ \\.\\-]?U[0-9]{8}$",
      "^U[0-9]{8}$"
    ],
    description: "The Austrian UID is a 9-digit number that starts with a U (optionally preceded with AT). The last digit is a check digit."
  }
];
