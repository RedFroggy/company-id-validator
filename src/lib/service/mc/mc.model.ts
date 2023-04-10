import { CompanyIdType } from '../../../types/company-id-type';
import { CompanyIdInfoModel } from '../../../types/company-id-info.model';

export const COMPANY_MC_DATA: CompanyIdInfoModel[] = [
  {
    name: 'SIRET',
    fullName: 'Système d\'Identification du Répertoire des Etablissements',
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: 'The SIRET is a 14-digit number used to identify businesses and establishments in Monaco. It is similar to the French SIRET code and is assigned by INSEE (the French National Institute of Statistics and Economic Studies) to companies operating in Monaco.',
    trustedSourceUrl: 'https://www.sirene.fr/sirene/public/static/aide/comprendreSIREN.html#section1',
    patterns: ['^[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{5}$'],
    parentLevel: true
  }
];