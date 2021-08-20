import {COMPANY_ES_DATA} from "../../../data/es/es.model";
import {CompanyInfo} from "../../../types/company-info.model";
import {CompanyIdService} from "../../company-id.service";
import {Injectable} from "../../injectable.decorator";

@Injectable
export class EsCompanyIdService extends CompanyIdService {

  constructor() {
    super('ES', COMPANY_ES_DATA);
  }

  validate(companyId: string, companyInfo?: CompanyInfo): boolean {
    if (companyInfo && companyInfo.companyIdName === 'CIF') {
      return this.validateCIF(companyId);
    }

    return false;
  }

  private validateCIF(companyId: string): boolean {
    const firstDigit = companyId[0];
    const digits = companyId.substring(1, companyId.length -1);
    const checkDigit = companyId.substring(companyId.length -1);

    let even_sum = 0, odd_sum = 0, n;

    for ( let i = 0; i < digits.length; i++) {
      n = parseInt( digits.charAt(i), 10 );
      if ( i % 2 === 0 ) {
        n *= 2;
        odd_sum += n < 10 ? n : n - 9;
      } else {
        even_sum += n;
      }
    }

    const last_digit = parseInt((even_sum + odd_sum).toString().slice(-1), 10);
    // const control_digit = last_digit != 0 ? (10 - last_digit ) : last_digit;
    const control_digit = (10 - last_digit );
    const control_letter = 'JABCDEFGHI'.substr( control_digit, 1 );

    // Control must be a digit
    if ( firstDigit.match( /[ABEH]/ ) ) {
      return checkDigit.toString() == control_digit.toString();

      // Control must be a letter
    } else if ( firstDigit.match( /[PQSW]/ ) ) {
      return checkDigit == control_letter;

      // Can be either
    } else {
      return checkDigit.toString() == control_digit.toString()
        || checkDigit == control_letter;
    }
  }
}
