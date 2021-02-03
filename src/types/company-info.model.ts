export interface CompanyInfo {
  // Local company identifier
  companyId?: string;
  // Local company identifier name
  companyIdName?: string;
  // Local company identifier description
  companyIdDescription?: string;
  // The sanitized local company id used for validation
  sanitizedCompanyId?: string;
  // Iso alpha2 country code of the company
  countryCode?: string;
  // True if the company id is valid in regards of the local algorithm validation
  valid?: boolean;
  // Trusted url where you can find info about the local company identifier
  trustedSourceUrl?: string;
}
