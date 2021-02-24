import {COMPANY_FR_DATA} from "../../../data/fr/fr.model";
import {CompanyValidator} from "../../company-id-validator.decorator";
import {CompanyValidationService} from "../../company-validation.service";
import {LuhnUtils} from "../utils/luhn.utils";

/**
 * Validate french companies identifiers: SIREN, SIRET.
 * You can use the INSEE webiste to manually validate french company identifiers
 * Please see {@link https://avis-situation-sirene.insee.fr/}
 */
@CompanyValidator
export class FrCompanyValidationService extends CompanyValidationService {
  constructor() {
    super('FR', COMPANY_FR_DATA);
  }

  /**
   * The Luhn checksum is used to validate SIREN OR SIRET identifiers.
   */
  validate(companyId: string): boolean {
    return LuhnUtils.validate(this.sanitize(companyId));
  }

  companyIdToVATNumber(companyId: string): string {
    const vatCompanyId = !this.isParentLevelCompanyId(companyId) ? this.toParentCompanyId(companyId) : companyId;
    const vatKey = (12 + (3 * (parseInt(vatCompanyId, 10) % 97))) % 97;
    return `FR${vatKey}${vatCompanyId}`;
  }

  vatNumberToCompanyId(vatNumber?: string): string {
    return vatNumber.substring(2);
  }

  toParentCompanyId(companyId: string): string {
    return companyId.substring(0, 9);
  }
}
