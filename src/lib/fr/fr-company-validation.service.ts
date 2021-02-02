import {CompanyInfo} from "../../types/company-info.model";
import {CompanyValidationService} from "../company-validation.service";
import {LuhnUtils} from "../utils/luhn.utils";

/**
 * Validate french companies identifiers: SIREN, SIRET.
 * You can use the INSEE webiste to manually validate french company identifiers
 * Please see {@link https://avis-situation-sirene.insee.fr/}
 */
export class FrCompanyValidationService extends CompanyValidationService {
  constructor() {
    super('FR');
  }
  info(companyId: string): CompanyInfo {
    const companyInfo: CompanyInfo = {};
    companyInfo.companyId = companyId;
    companyInfo.countryCode = this.countryCode;
    companyInfo.valid = false;

    const sanitizedCompanyId = this.sanitize(companyId);
    companyInfo.sanitizedCompanyId = sanitizedCompanyId;

    if (this.validateSiren(sanitizedCompanyId)) {
      companyInfo.companyIdDescription = 'Système d\'Identification du Répertoire des Entreprises';
      companyInfo.companyIdName = 'SIREN';
      companyInfo.valid = true;
    }

    if (this.validateSiret(sanitizedCompanyId)) {
      companyInfo.companyIdDescription = 'Système d\'Identification du Répertoire des Etablissements';
      companyInfo.companyIdName = 'SIRET';
      companyInfo.valid = true;
    }

    if (companyInfo.valid) {
      companyInfo.trustedSourceUrl = 'https://avis-situation-sirene.insee.fr/'
    }

    return companyInfo;
  }

  /**
   * Company identifier name: SIREN (Système d'Identification du Répertoire des Entreprises)
   * The SIREN  is a 9 digit number used to identify French companies. The Luhn checksum is used
   * to validate the numbers.
   */
  private validateSiren(companyId: string): boolean {
    return companyId.length === 9 && LuhnUtils.validate(companyId);
  }

  /**
   * Company identifier name: SIRET (Système d'Identification du Répertoire des Etablissements)
   * The SIRET is a 14 digit number used to identify French companies' establishments
   * and facilities. The Luhn checksum is used to validate the numbers.
   */
  private validateSiret(companyId: string): boolean {
    return companyId.length === 14 && LuhnUtils.validate(companyId);
  }
}
