import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_FR_DATA: CompanyIdInfoModel[] = [
  {
    name: "SIREN",
    fullName: "Système d'Identification du Répertoire des Entreprises",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: "The SIREN (Système d'Identification du Répertoire des Entreprises) is a 9\ndigit number used to identify French companies. The Luhn checksum is used\nto validate the numbers.",
    trustedSourceUrl: "https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_entreprises",
    pattern: "^[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}$",
    parentLevel: true
  },
  {
    fullName: "Système d'Identification du Répertoire des Etablissements",
    name: "SIRET",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    description: "The SIRET (Système d'Identification du Répertoire des ETablissements)\nis a 14 digit number used to identify French companies' establishments\nand facilities. The Luhn checksum is used to validate the numbers.",
    trustedSourceUrl: "https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements",
    pattern: "^[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{5}$",
    parentLevel: false
  },
  {
    fullName: "Numéro de TVA intracommunautaire",
    name: "VAT",
    type: CompanyIdType.VAT,
    description: "The n° TVA (Numéro d'identification à la taxe sur la valeur ajoutée) is the\nSIREN (Système d’Identification du Répertoire des Entreprises) prefixed by\ntwo digits. In old style numbers the two digits are numeric, with new\nstyle numbers at least one is a alphabetic.",
    trustedSourceUrl: "https://www.service-public.fr/professionnels-entreprises/vosdroits/F23570",
    pattern: "^FR[0-9]{2}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}[ \\.\\-]?[0-9]{3}$",
    parentLevel: true
  }
];
