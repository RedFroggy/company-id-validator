import { CompanyIdType } from '../../../types/company-id-type';
import { CompanyIdInfoModel } from '../../../types/company-id-info.model';

export const COMPANY_US_DATA: CompanyIdInfoModel[] = [
  {
    name: 'EIN',
    fullName: 'Employer Identification Number',
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: 'The EIN is a unique nine-digit number assigned by the IRS to identify businesses for tax purposes.',
    trustedSourceUrl: 'https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers',
    patterns: ['^[0-9]{2}-[0-9]{7}$'],
    parentLevel: true
  }
];