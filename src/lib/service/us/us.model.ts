import { CompanyIdType } from "../../../types/company-id-type";
import { CompanyIdInfoModel } from "../../../types/company-id-info.model";

export const COMPANY_US_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Employer Identification Number",
    name: "EIN",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: "The EIN is a nine-digit number assigned by the IRS to identify a business entity.",
    trustedSourceUrl: "https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers",
    patterns:["^[0-9]{2}[ \.\-]?[0-9]{7}$"],
    parentLevel: true
  }
];