import { CompanyIdType } from '../../../types/company-id-type';
import { CompanyIdInfoModel } from '../../../types/company-id-info.model';

export const COMPANY_AU_DATA: CompanyIdInfoModel[] = [
  {
    name: 'ABN',
    fullName: 'Australian Business Number',
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: 'The ABN is a unique 11-digit number assigned to identify businesses in Australia. It is used for various tax and business purposes.',
    trustedSourceUrl: 'https://www.abr.gov.au/business-super-funds-charities/applying-abn',
    patterns: ['^[0-9]{2}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}$'],
    parentLevel: true
  }
];