import {CompanyIdInfoModel} from "../../../types/company-id-info.model";
import {CompanyIdType} from "../../../types/company-id-type";

export const COMPANY_DE_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Handelsregisternummer (German company register number)",
    name: "Handelsregisternummer",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    trustedSourceUrl: "https://en.wikipedia.org/wiki/German_Trade_Register",
    parentLevel: true,
    patterns: ["^([A-Z][0-9]{4}[ :]?)?(HRA|HRB|PR|VR|GnR|GNR) ?\\d{1,6} ?([A-Z]{2})?$"],
    description: "The number consists of the court where the company has registered, the type\n" +
      "of register and the registration number.\n" +
      "The type of the register is either HRA or HRB where the letter \"B\" stands for\n" +
      "HR section B, where limited liability companies and corporations are entered\n" +
      "(GmbH's and AG's). There is also a section HRA for business partnerships\n" +
      "(OHG's, KG's etc.). In other words: businesses in section HRB are limited\n" +
      "liability companies, while businesses in HRA have personally liable partners."
  },
  {
    fullName: "VAT (German vat number)",
    name: "VAT",
    type: CompanyIdType.VAT,
    parentLevel: true,
    patterns: ["^DE ?\\d{9}$"]
  }
];
