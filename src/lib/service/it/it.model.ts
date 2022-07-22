import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_IT_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Partita IVA (Italian VAT number)",
    name: "Partita IVA",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: "The Partita IVA (Imposta sul valore aggiunto) consists of 11 digits. The\nfirst 7 digits are a company identifier, the next 3 refer to the province\nof residence and the last is a check digit.\nThe fiscal code for individuals is not accepted as valid code for\nintracommunity VAT related operations so it is ignored here.",
    trustedSourceUrl: "https://telematici.agenziaentrate.gov.it/VerificaPIVA/Scegli.do?parameter=verificaPiva",
    parentLevel: true,
    patterns: ["^IT.?\\s?\\d{11}$"],
  }
];
