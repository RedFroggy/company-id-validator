import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_AD_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Número de Registre Tributari, Andorra tax number",
    name: "NRT",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    trustedSourceUrl: "https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Andorra-TIN.pdf",
    parentLevel: true,
    patterns: ["^.{1}-?\\d{6}-?.{1}$"],
    description: "NRT (Número de Registre Tributari, Andorra tax number).\nThe Número de Registre Tributari (NRT) is an identifier of legal and natural\nentities for tax purposes.\nThis number consists of one letter indicating the type of entity, then 6\ndigits, followed by a check letter.\nMore information:\n* https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Andorra-TIN.pdf"
  }
];
