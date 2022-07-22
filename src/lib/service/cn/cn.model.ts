import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_CN_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Unified Social Credit Code",
    name: "USCC",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    trustedSourceUrl: "https://zh.wikipedia.org/wiki/统一社会信用代码",
    parentLevel: true,
    patterns: ["^[1-9ANY][123459]\\d{6}\\w{9}\\w$"],
    description: "USCC (Unified Social Credit Code, 统一社会信用代码, China tax number).\nThis number consists of 18 digits or uppercase English letters (excluding the\nletters I, O, Z, S, V). The number is comprised of several parts:\n* Digit 1 represents the registering authority,\n* Digit 2 represents the registered entity type,\n* Digits 3 through 8 represent the registering region code,\n* Digits 9 through 17 represent the organisation code,\n* Digit 18 is a check digit (either a number or letter).\nThe registering authority digit most often is a 9, which represents the State\nAdministration for Industry and Commerce (SAIC) as the registering authority.\nThe registered entity type indicates the type of business (or entity). The\nmost common entity types in China are:\n* Wholly Foreign-Owned Enterprises (WFOE): 外商独资企业\n* Joint Ventures (JV): 合资\n* Representative Office: 代表处\n* State-Owned Enterprise (SOE): 国有企业\n* Private Enterprise: 民营企业\n* Individually-Owned: 个体户\nThe registering region code, sometimes referred to as the \"administrative\ndivision code\", is a string of six numbers that indicates where the company\nis registered. It roughly follows the organisation of the official Chinese\nregions.\nThe organisation code comes directly from the China Organization Code\ncertificate, an alternative document to the China Business License. It can\ncontain letters or digits.\nMore information:\n* https://zh.wikipedia.org/wiki/统一社会信用代码\n* https://zh.wikipedia.org/wiki/校验码\n* https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/China-TIN.pdf"
  }
];
