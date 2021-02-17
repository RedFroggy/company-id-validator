export interface CompanyInfo {
  // Requested company id
  query?: string;
  // The sanitized request query used for validation
  sanitizedQuery?: string;
  // Local company identifier
  companyId?: string;
  // For multi level companies, indicates the parent identifier
  parentCompanyId?: string;
  // Local VAT number
  vatNumber?: string;
  // Local company identifier name
  companyIdName?: string;
  // Local company identifier description
  companyIdDescription?: string;
  // Iso alpha2 country code of the company
  countryCode?: string;
  // True if the company id is valid in regards of the local algorithm validation
  valid?: boolean;
  // Trusted url where you can find info about the local company identifier
  trustedSourceUrl?: string;
  // Pattern used to identify
  pattern?: string;
  // True for a parent level company identifier
  parentLevel?: boolean;
}
