import {CompanyId} from "./company-id";
import {CompanyIdService} from "./company-id.service";

/**
 * Decorator that register a new {@see CompanyIdService}
 * instance in the static list {@see CompanyId#VALIDATORS}
 * @param target class annotated with this decorator
 */
export const CompanyIdValidator = (target) => {
  const instance: CompanyIdService = new target() as CompanyIdService;
  CompanyId.VALIDATORS[instance.countryCode] = instance;
}
