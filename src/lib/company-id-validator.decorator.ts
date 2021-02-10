import {CompanyValidation} from "./company-validation";
import {CompanyValidationService} from "./company-validation.service";

/**
 * Decorator that register a new {@see CompanyValidationService}
 * instance in the static list {@see CompanyValidation#VALIDATORS}
 * @param target class annotated with this decorator
 */
export const CompanyValidator = (target) => {
  const instance: CompanyValidationService = new target() as CompanyValidationService;
  CompanyValidation.VALIDATORS[instance.countryCode] = instance;
}
