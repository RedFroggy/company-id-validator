import {CompanyIdType} from "../../../types/company-id-type";
import {CompanyIdInfoModel} from "../../../types/company-id-info.model";

export const COMPANY_CH_DATA: CompanyIdInfoModel[] = [
  {
    fullName: "Unternehmens-Identifikationsnummer",
    name: "UID",
    type: CompanyIdType.LOCAL_COMPANY_ID,
    trustedSourceUrl: "https://de.wikipedia.org/wiki/Unternehmens-Identifikationsnummer",
    patterns:["^CHE-?\\d{3}.?\\d{3}.?\\d{3}$"] ,
    parentLevel: true,
    description: "UID (Unternehmens-Identifikationsnummer, Swiss business identifier).\nThe Swiss UID is used to uniquely identify businesses for taxation purposes.\nThe number consists of a fixed \"CHE\" prefix, followed by 9 digits that are\nprotected with a simple checksum.\nThis module only supports the \"new\" format that was introduced in 2011 which\ncompletely replaced the \"old\" 6-digit format in 2014.\nMore information:\n* https://www.uid.admin.ch/\n* https://de.wikipedia.org/wiki/Unternehmens-Identifikationsnummer\n>>> validate('CHE-100.155.212')\n'CHE100155212'\n>>> validate('CHE-100.155.213')\nTraceback (most recent call last):\n    ...\nInvalidChecksum: ...\n>>> format('CHE100155212')\n'CHE-100.155.212'"
  }
];
