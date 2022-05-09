import {CompanyIdInfoModel} from "../types/company-id-info.model";
import {AdCompanyIdService} from "./service/ad/ad-company-id.service";
import {BeCompanyIdService} from "./service/be/be-company-id.service";
import {ChCompanyIdService} from "./service/ch/ch-company-id.service";
import {CnCompanyIdService} from "./service/cn/cn-company-id.service";
import {CompanyIdService} from "./service/company-id.service";
import {DeCompanyIdService} from "./service/de/de-company-id.service";
import {EsCompanyIdService} from "./service/es/es-company-id.service";
import {FrCompanyIdService} from "./service/fr/fr-company-id.service";
import {GbCompanyIdService} from "./service/gb/gb-company-id.service";
import {ItCompanyIdService} from "./service/it/it-company-id.service";
import {JpCompanyIdService} from "./service/jp/jp-company-id.service";
import {NiCompanyIdService} from "./service/ni/ni-company-id.service";
import {NoCompanyIdService} from "./service/no/no-company-id.service";
import {PlCompanyIdService} from "./service/pl/pl-company-id.service";
import {ScCompanyIdService} from "./service/sc/sc-company-id.service";
import {SeCompanyIdService} from "./service/se/se-company-id.service";

export class CompanyIdFactory {

  static info(countryCode: string, companyId: string): CompanyIdInfoModel {
    return this.getInstance(countryCode).info(companyId);
  }

  private static getInstance(countryCode: string): CompanyIdService {
    let companyIdService: CompanyIdService;
    switch (countryCode.toUpperCase()) {
      case 'AD':
        companyIdService = new AdCompanyIdService();
        break;
      case 'BE':
        companyIdService = new BeCompanyIdService();
        break;
      case 'CH':
        companyIdService = new ChCompanyIdService();
        break;
      case 'CN':
        companyIdService = new CnCompanyIdService();
        break;
      case 'DE':
        companyIdService = new DeCompanyIdService();
        break;
      case 'ES':
        companyIdService = new EsCompanyIdService();
        break;
      case 'FR':
        companyIdService = new FrCompanyIdService();
        break;
      case 'GB':
        companyIdService = new GbCompanyIdService();
        break;
      case 'IT':
        companyIdService = new ItCompanyIdService();
        break;
      case 'JP':
        companyIdService = new JpCompanyIdService();
        break;
      case 'NI':
        companyIdService = new NiCompanyIdService();
        break;
      case 'NO':
        companyIdService = new NoCompanyIdService();
        break;
      case 'PL':
        companyIdService = new PlCompanyIdService();
        break;
      case 'SC':
        companyIdService = new ScCompanyIdService();
        break;
      case 'SE':
        companyIdService = new SeCompanyIdService();
        break;
      default:
        throw new Error('Unsupported countryCode: ' + countryCode);
    }

    return companyIdService;
  }
}
