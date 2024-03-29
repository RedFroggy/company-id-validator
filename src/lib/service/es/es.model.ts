import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_ES_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Código de identificación fiscal",
    name: "CIF",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    trustedSourceUrl: "https://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal",
    parentLevel: true,
    patterns: ["^([ABCDEFGHJUV][0-9]{8})|([NPQRSW][0-9]{7}[A-Z]{1})$"],
    description: "The Spanish VAT number is a 9-digit number where either the first, last\ndigits or both can be letters.\nThe number is either a DNI (Documento Nacional de Identidad, for\nSpaniards), a NIE (Número de Identificación de Extranjero, for\nforeigners) or a CIF (Código de Identificación Fiscal, for legal\nentities and others)."
  }
];
