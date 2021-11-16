import {Injectable} from "../../injectable.decorator";
import {CompanyIdService} from "../company-id.service";
import {COMPANY_DE_DATA} from "./de.model";
import {GERMAN_REGISTRY_TYPES} from "./models/german-registry.model";

const COURT_REGEXP = '(.*)';
const REGISTRY_REGEXP =  `(${GERMAN_REGISTRY_TYPES.join('|')})`;
const NUMBER_REGEXP = '([1-9][0-9]{0,5})(s*(\\w[A-ZÖ]{1,3}))?';
const FORMATS = [
  REGISTRY_REGEXP + '\\s+' + NUMBER_REGEXP + ',?\\s+' + COURT_REGEXP + '$',
  COURT_REGEXP + ',?\\s+' + REGISTRY_REGEXP + '\\s+' + NUMBER_REGEXP + '$',
]

@Injectable
export class DeCompanyIdService extends CompanyIdService {
  constructor() {
    super('DE', COMPANY_DE_DATA);
  }

  public validate(companyId: string): boolean {

    const group = FORMATS.map(format => {
      const groups = new RegExp(format, 'g').exec(companyId);
      if (groups && groups.length === 6) {
        return groups;
      }
      return null;
    }).find(group => Boolean(group));

    return group && !(!group[1] || !group[2] || !group[3]);
  }
}
