import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_JP_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Corporate Number (法人番号, hōjin bangō, Japanese Corporate Number).",
    name: "Corporate Number",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    trustedSourceUrl: "https://en.wikipedia.org/wiki/Corporate_Number",
    parentLevel: true,
    patterns: ["^(?:[0-9]{1}-[0-9]{4}-[0-9]{4}-[0-9]{4}|[0-9]{13})$"],
    description: "The Corporate Number is assigned by the Japanese National Tax Agency to\n" +
      "identify government organs, public entities, registered corporations and\n" +
      "other organisations. The number consists of 13 digits where the first digit\n" +
      "is a non-zero check digit."
  }
];
