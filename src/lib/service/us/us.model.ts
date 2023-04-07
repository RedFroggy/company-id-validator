import { CompanyIdType } from "../../../types/company-id-type";
import { CompanyIdInfoModel } from "../../../types/company-id-info.model";

export const COMPANY_US_DATA: CompanyIdInfoModel[] = [
  {
    name: "Employer Identification Number",
    fullName: "Employer Identification Number",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: "The Employer Identification Number (EIN) is a unique nine-digit number assigned by the Internal Revenue Service (IRS) to identify businesses for tax purposes.",
    trustedSourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers",
    patterns: ["^[0-9]{2}-[0-9]{7}$"],
    parentLevel: true
  },
  {
    name: "D-U-N-S Number",
    fullName: "Data Universal Numbering System Number",
    type: CompanyIdType.GLOBAL_COMPANY_ID,
    description: "The Data Universal Numbering System Number (D-U-N-S Number) is a unique nine-digit identifier for businesses provided by Dun & Bradstreet.",
    trustedSourceUrl: "https://www.dnb.com/duns-number/what-is-a-duns-number.html",
    patterns: ["^[0-9]{9}$"],
    parentLevel: true
  }
];