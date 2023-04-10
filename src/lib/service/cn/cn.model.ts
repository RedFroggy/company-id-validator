import { CompanyIdType } from '../../../types/company-id-type';
import { CompanyIdInfoModel } from '../../../types/company-id-info.model';

export const COMPANY_CN_DATA: CompanyIdInfoModel[] = [
  {
    name: 'USCC',
    fullName: 'Unified Social Credit Code',
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: 'The USCC is a unique 18-digit number assigned to identify businesses in China for administrative purposes.',
    trustedSourceUrl: 'https://en.wikipedia.org/wiki/Unified_Social_Credit_Code',
    patterns: ['^[0-9A-Z]{18}$'],
    parentLevel: true
  }
];