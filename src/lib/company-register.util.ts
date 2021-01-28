import {AdCompanyValidationService} from "./ad/ad-company-validation.service";
import {CompanyValidationService} from "./company-validation.service";
import {FrCompanyValidationService} from "./fr/fr-company-validation.service";

export const COMPANY_VALIDATORS: {isoAlpha2countryCode: string, instance: CompanyValidationService}[] = [];

function registerValidator(isoAlpha2countryCode: string, instance: CompanyValidationService) {
  COMPANY_VALIDATORS[isoAlpha2countryCode] = instance;
}

export function getValidator(isoAlpha2countryCode: string): CompanyValidationService {
  return COMPANY_VALIDATORS[isoAlpha2countryCode];
}

/**
 * Register here all validators
 */
registerValidator("FR", new FrCompanyValidationService());
registerValidator("AD", new AdCompanyValidationService());
