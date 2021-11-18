import {Alpha2Code} from "i18n-iso-countries";
import {CompanyIdType} from "./company-id-type";

export interface CompanyIdInfoModel {
  // Local company identifier
  id?: string;
  // Local company identifier full name
  fullName?: string;
  // Local company identifier short name
  name?: string;
  // Type of company id (local company identifier, vat number, etc..)
  type?: CompanyIdType;
  // Local company identifier description
  description?: string;
  // Requested company id
  query?: string;
  // The sanitized request query used for validation
  sanitizedQuery?: string;
  // For multi level companies, indicates the parent identifier
  parentId?: string;
  // Local VAT number
  vatNumber?: string;
  // Id locale
  locale?: string;
  // Iso alpha2 country code of the company
  countryCode?: Alpha2Code;
  // Full name of the country
  countryName?: string;
  // True if the company id is valid in regards of the local algorithm validation
  valid?: boolean;
  // Trusted url where you can find info about the local company identifier
  trustedSourceUrl?: string;
  // Pattern used to identify
  pattern?: string;
  // True for a parent level company identifier
  parentLevel?: boolean;
  // Specific country properties
  extraProperties?: any;
}
