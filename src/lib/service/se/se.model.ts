import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_SE_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Orgnr (Organisationsnummer, Swedish company number)",
    name: "Organisationsnummer",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    parentLevel: true,
    patterns: ["^[0-9]{6}-?[0-9]{4}$"],
    description: "The Orgnr (Organisationsnummer) is the national number to identify Swedish\n" +
      "companies and consists of 10 digits. These are the first 10 digits in the\n" +
      "Swedish VAT number, i.e. it's the VAT number without the 'SE' in front and\n" +
      "the '01' at the end."
  },
  {
    fullName: "VAT (Moms, Mervärdesskatt, Swedish VAT number)",
    name: "VAT number",
    type: CompanyIdType.VAT,
    parentLevel: true,
    patterns: ["^SE[ \\.\\-]?[0-9]{6}-?[0-9]{4}(01|02|03)$"],
    description: "The Momsregistreringsnummer is used for VAT (Moms, Mervärdesskatt) purposes\n" +
      "and consists of 12 digits of which the last two should be 01. The first 10\n" +
      "digits should have a valid Luhn checksum."
  }
];
