(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../src/lib/handler/company-id-handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../src/data/ad/ad.model.ts":
/*!**********************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/data/ad/ad.model.ts ***!
  \**********************************************************************************************************/
/*! exports provided: COMPANY_AD_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_AD_DATA", function() { return COMPANY_AD_DATA; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const COMPANY_AD_DATA = [{
  "companyIdFullName": "Número de Registre Tributari, Andorra tax number",
  "companyIdName": "NRT",
  "trustedSourceUrl": "https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Andorra-TIN.pdf",
  "parentLevel": true,
  "pattern": "^.{1}-?\\d{6}-?.{1}$",
  "companyIdDescription": "NRT (Número de Registre Tributari, Andorra tax number).\nThe Número de Registre Tributari (NRT) is an identifier of legal and natural\nentities for tax purposes.\nThis number consists of one letter indicating the type of entity, then 6\ndigits, followed by a check letter.\nMore information:\n* https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Andorra-TIN.pdf",
  "countryCode": "AD"
}];

/***/ }),

/***/ "../../../src/data/be/be.model.ts":
/*!**********************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/data/be/be.model.ts ***!
  \**********************************************************************************************************/
/*! exports provided: COMPANY_BE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_BE_DATA", function() { return COMPANY_BE_DATA; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const COMPANY_BE_DATA = [{
  "companyIdFullName": "ondernemingsnummer (Belgian enterprise number)",
  "companyIdName": "ondernemingsnummer",
  "pattern": "^\\d{10}$",
  "parentLevel": true,
  "companyIdDescription": "BTW, TVA, NWSt, ondernemingsnummer (Belgian enterprise number).\nThe enterprise number (ondernemingsnummer) is a unique identifier of\ncompanies within the Belgian administrative services. It was previously\nthe VAT ID number. The number consists of 10 digits.",
  "countryCode": "BE"
}, {
  "companyIdFullName": "VAT number",
  "companyIdName": "VAT",
  "pattern": "^BE\\d{10}$",
  "parentLevel": true,
  "countryCode": "BE"
}];

/***/ }),

/***/ "../../../src/data/ch/ch.model.ts":
/*!**********************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/data/ch/ch.model.ts ***!
  \**********************************************************************************************************/
/*! exports provided: COMPANY_CH_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_CH_DATA", function() { return COMPANY_CH_DATA; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const COMPANY_CH_DATA = [{
  "companyIdFullName": "Unternehmens-Identifikationsnummer",
  "companyIdName": "UID",
  "trustedSourceUrl": "https://de.wikipedia.org/wiki/Unternehmens-Identifikationsnummer",
  "pattern": "^CHE-?\\d{3}.?\\d{3}.?\\d{3}$",
  "parentLevel": true,
  "companyIdDescription": "UID (Unternehmens-Identifikationsnummer, Swiss business identifier).\nThe Swiss UID is used to uniquely identify businesses for taxation purposes.\nThe number consists of a fixed \"CHE\" prefix, followed by 9 digits that are\nprotected with a simple checksum.\nThis module only supports the \"new\" format that was introduced in 2011 which\ncompletely replaced the \"old\" 6-digit format in 2014.\nMore information:\n* https://www.uid.admin.ch/\n* https://de.wikipedia.org/wiki/Unternehmens-Identifikationsnummer\n>>> validate('CHE-100.155.212')\n'CHE100155212'\n>>> validate('CHE-100.155.213')\nTraceback (most recent call last):\n    ...\nInvalidChecksum: ...\n>>> format('CHE100155212')\n'CHE-100.155.212'",
  "countryCode": "CH"
}];

/***/ }),

/***/ "../../../src/data/cn/cn.model.ts":
/*!**********************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/data/cn/cn.model.ts ***!
  \**********************************************************************************************************/
/*! exports provided: COMPANY_CN_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_CN_DATA", function() { return COMPANY_CN_DATA; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const COMPANY_CN_DATA = [{
  "companyIdFullName": "Unified Social Credit Code",
  "companyIdName": "USCC",
  "trustedSourceUrl": "https://zh.wikipedia.org/wiki/统一社会信用代码",
  "parentLevel": true,
  "pattern": "^[1-9ANY][123459]\\d{6}\\w{9}\\w$",
  "companyIdDescription": "USCC (Unified Social Credit Code, 统一社会信用代码, China tax number).\nThis number consists of 18 digits or uppercase English letters (excluding the\nletters I, O, Z, S, V). The number is comprised of several parts:\n* Digit 1 represents the registering authority,\n* Digit 2 represents the registered entity type,\n* Digits 3 through 8 represent the registering region code,\n* Digits 9 through 17 represent the organisation code,\n* Digit 18 is a check digit (either a number or letter).\nThe registering authority digit most often is a 9, which represents the State\nAdministration for Industry and Commerce (SAIC) as the registering authority.\nThe registered entity type indicates the type of business (or entity). The\nmost common entity types in China are:\n* Wholly Foreign-Owned Enterprises (WFOE): 外商独资企业\n* Joint Ventures (JV): 合资\n* Representative Office: 代表处\n* State-Owned Enterprise (SOE): 国有企业\n* Private Enterprise: 民营企业\n* Individually-Owned: 个体户\nThe registering region code, sometimes referred to as the \"administrative\ndivision code\", is a string of six numbers that indicates where the company\nis registered. It roughly follows the organisation of the official Chinese\nregions.\nThe organisation code comes directly from the China Organization Code\ncertificate, an alternative document to the China Business License. It can\ncontain letters or digits.\nMore information:\n* https://zh.wikipedia.org/wiki/统一社会信用代码\n* https://zh.wikipedia.org/wiki/校验码\n* https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/China-TIN.pdf",
  "countryCode": "CN"
}];

/***/ }),

/***/ "../../../src/data/fr/fr.model.ts":
/*!**********************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/data/fr/fr.model.ts ***!
  \**********************************************************************************************************/
/*! exports provided: COMPANY_FR_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_FR_DATA", function() { return COMPANY_FR_DATA; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const COMPANY_FR_DATA = [{
  "companyIdFullName": "Système d'Identification du Répertoire des Entreprises",
  "companyIdName": "SIREN",
  "trustedSourceUrl": "https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_entreprises",
  "pattern": "^\\d{9}$",
  "parentLevel": true,
  "companyIdDescription": "The SIREN (Système d'Identification du Répertoire des Entreprises) is a 9\ndigit number used to identify French companies. The Luhn checksum is used\nto validate the numbers.",
  "countryCode": "FR"
}, {
  "companyIdFullName": "Système d'Identification du Répertoire des Etablissements",
  "companyIdName": "SIRET",
  "trustedSourceUrl": "https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements",
  "pattern": "^\\d{14}$",
  "parentLevel": false,
  "companyIdDescription": "The SIRET (Système d'Identification du Répertoire des ETablissements)\nis a 14 digit number used to identify French companies' establishments\nand facilities. The Luhn checksum is used to validate the numbers.",
  "countryCode": "FR"
}, {
  "companyIdFullName": "Numéro de TVA intracommunautaire",
  "companyIdName": "VAT",
  "trustedSourceUrl": "https://www.service-public.fr/professionnels-entreprises/vosdroits/F23570",
  "pattern": "^FR\\d{9}$",
  "parentLevel": true,
  "countryCode": "FR",
  "companyIdDescription": "The n° TVA (Numéro d'identification à la taxe sur la valeur ajoutée) is the\nSIREN (Système d’Identification du Répertoire des Entreprises) prefixed by\ntwo digits. In old style numbers the two digits are numeric, with new\nstyle numbers at least one is a alphabetic."
}];

/***/ }),

/***/ "../../../src/data/it/it.model.ts":
/*!**********************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/data/it/it.model.ts ***!
  \**********************************************************************************************************/
/*! exports provided: COMPANY_IT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_IT_DATA", function() { return COMPANY_IT_DATA; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const COMPANY_IT_DATA = [{
  "companyIdFullName": "Partita IVA (Italian VAT number)",
  "companyIdName": "Partita IVA",
  "trustedSourceUrl": "https://telematici.agenziaentrate.gov.it/VerificaPIVA/Scegli.do?parameter=verificaPiva",
  "parentLevel": true,
  "pattern": "^IT.?\\s?\\d{11}$",
  "companyIdDescription": "The Partita IVA (Imposta sul valore aggiunto) consists of 11 digits. The\nfirst 7 digits are a company identifier, the next 3 refer to the province\nof residence and the last is a check digit.\nThe fiscal code for individuals is not accepted as valid code for\nintracommunity VAT related operations so it is ignored here.",
  "countryCode": "IT"
}];

/***/ }),

/***/ "../../../src/lib/company-id-validator.decorator.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/company-id-validator.decorator.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CompanyIdValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyIdValidator", function() { return CompanyIdValidator; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _company_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-id */ "../../../src/lib/company-id.ts");


/**
 * Decorator that register a new {@see CompanyIdService}
 * instance in the static list {@see CompanyId#VALIDATORS}
 * @param target class annotated with this decorator
 */

const CompanyIdValidator = target => {
  const instance = new target();
  _company_id__WEBPACK_IMPORTED_MODULE_1__["CompanyId"].VALIDATORS[instance.countryCode] = instance;
};

/***/ }),

/***/ "../../../src/lib/company-id.service.ts":
/*!****************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/company-id.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyIdService", function() { return CompanyIdService; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Abstract company validation service
 * - Validate the company identifier based
 * on the provided companyId and country code
 * - Returns detailed information on the provided
 * company identifier and country code
 */
class CompanyIdService {
  constructor(countryCode, infos) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "countryCode", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "infos", void 0);

    this.countryCode = this.sanitize(countryCode);
    this.infos = infos;
  }
  /**
   * Returns detailed information about the given {@see companyId}.
   * If there is more than one identifier defined for one country the
   * {@see CompanyInfo#pattern} property is used to determine which one to use.
   */


  info(query) {
    // Sanitize query
    const sanitizedQuery = this.sanitize(query);
    let companyInfo = {};
    companyInfo.valid = false;
    companyInfo.query = query;
    companyInfo.sanitizedQuery = sanitizedQuery;

    if (this.infos) {
      const matchedCompanyInfo = this.infos.find(d => d.pattern && new RegExp(d.pattern).test(sanitizedQuery));

      if (matchedCompanyInfo) {
        companyInfo = Object.assign({}, companyInfo, matchedCompanyInfo);
      }

      const validCompanyId = Boolean(matchedCompanyInfo && this.validate(sanitizedQuery));

      if (validCompanyId) {
        if (companyInfo.companyIdName === 'VAT') {
          companyInfo.vatNumber = sanitizedQuery;
          companyInfo.companyId = this.vatNumberToCompanyId(sanitizedQuery);
        } else {
          companyInfo.companyId = sanitizedQuery;
          companyInfo.vatNumber = this.companyIdToVATNumber(sanitizedQuery);
        }

        if (!companyInfo.parentLevel) {
          companyInfo.parentCompanyId = this.toParentCompanyId(sanitizedQuery);
        } // Indicate if the identifier is locally valid


        companyInfo.valid = true;
      }
    }

    return companyInfo;
  }
  /**
   * Sanitize {@see value}
   * by removing spaces and dashes
   */


  sanitize(value) {
    if (value) {
      return value.replace(/-|\s/g, '').trim().toUpperCase();
    }

    return null;
  }

  isParentLevelCompanyId(companyId) {
    return this.infos.some(info => info.parentLevel && new RegExp(info.pattern).test(companyId));
  }

  toParentCompanyId(companyId) {
    return null;
  }
  /**
   * Locally convert a company identifier to a VAT number
   */


  companyIdToVATNumber(companyId) {
    return null;
  }
  /**
   * Locally convert a VAT number to a company identifier
   */


  vatNumberToCompanyId(vatNumber) {
    return null;
  }

}

/***/ }),

/***/ "../../../src/lib/company-id.ts":
/*!********************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/company-id.ts ***!
  \********************************************************************************************************/
/*! exports provided: CompanyId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyId", function() { return CompanyId; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var countries_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! countries-db */ "../../countries-db/dist/index.js");
/* harmony import */ var countries_db__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(countries_db__WEBPACK_IMPORTED_MODULE_2__);



class CompanyId {
  static validate(countryCode, companyId) {
    const info = CompanyId.info(countryCode, companyId);
    return info && info.valid;
  }

  static info(countryCode, companyId) {
    if (!countryCode) {
      throw new Error('The country code is mandatory');
    }

    if (!companyId) {
      throw new Error('The company identifier is mandatory');
    }

    if (!Object(countries_db__WEBPACK_IMPORTED_MODULE_2__["getCountry"])(countryCode)) {
      throw new Error('Invalid isoAlpha2 country code');
    }

    return CompanyId.getValidator(countryCode).info(companyId);
  }

  static getValidator(countryCode) {
    const validator = CompanyId.VALIDATORS[countryCode.toUpperCase()];

    if (!validator) {
      throw new Error('Unsupported countryCode: ' + countryCode);
    }

    return validator;
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(CompanyId, "VALIDATORS", []);

/***/ }),

/***/ "../../../src/lib/handler/company-id-handler.ts":
/*!************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/handler/company-id-handler.ts ***!
  \************************************************************************************************************************/
/*! exports provided: getCompanyInfoByCountryCodeAndId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompanyInfoByCountryCodeAndId", function() { return getCompanyInfoByCountryCodeAndId; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators */ "../../../src/lib/validators/index.ts");
/* harmony import */ var _company_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company-id */ "../../../src/lib/company-id.ts");



async function getCompanyInfoByCountryCodeAndId(event) {
  return new Promise(resolve => {
    try {
      const companyInfo = _company_id__WEBPACK_IMPORTED_MODULE_2__["CompanyId"].info(event.pathParameters.countryCode, event.pathParameters.companyId);
      resolve({
        statusCode: 200,
        body: JSON.stringify(companyInfo)
      });
    } catch (error) {
      resolve({
        statusCode: 400,
        body: JSON.stringify({
          reason: error.message
        })
      });
    }
  });
}

/***/ }),

/***/ "../../../src/lib/validators/ad/ad-company-id.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/ad/ad-company-id.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: AdCompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdCompanyIdService", function() { return AdCompanyIdService; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_ad_ad_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/ad/ad.model */ "../../../src/data/ad/ad.model.ts");
/* harmony import */ var _company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../company-id-validator.decorator */ "../../../src/lib/company-id-validator.decorator.ts");
/* harmony import */ var _company_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company-id.service */ "../../../src/lib/company-id.service.ts");


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Validate andorra companies identifiers: NRT.
 * See {@link https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Andorra-TIN.pdf}
 */

let AdCompanyIdService = class AdCompanyIdService extends _company_id_service__WEBPACK_IMPORTED_MODULE_3__["CompanyIdService"] {
  constructor() {
    super('AD', _data_ad_ad_model__WEBPACK_IMPORTED_MODULE_1__["COMPANY_AD_DATA"]);
  }
  /**
   * Company identifier name: NRT (Número de Registre Tributari, Andorra tax number)
   * The Número de Registre Tributari (NRT) is an identifier of legal and natural entities for tax purposes.
   * This number consists of one letter indicating the type of entity, then 6
   * digits, followed by a check letter.
   */


  validate(companyId) {
    const sanitizedCompanyId = this.sanitize(companyId);
    const companyIdParts = sanitizedCompanyId.split("");

    if (companyIdParts.length != 8) {
      return false;
    }

    const firstDigit = companyIdParts[0];
    const lastDigit = companyIdParts[companyId.length - 1];
    const middleDigits = Number(sanitizedCompanyId.substr(1, sanitizedCompanyId.length - 2));

    if (Number.isInteger(Number(firstDigit)) || Number.isInteger(Number(lastDigit))) {
      return false;
    }

    if (!'ACDEFGLOPU'.includes(firstDigit)) {
      return false;
    }

    if (firstDigit === 'F' && middleDigits > 699999) {
      return false;
    }

    return !('AL'.includes(firstDigit) && !(middleDigits > 699999 && middleDigits < 800000));
  }

};
AdCompanyIdService = __decorate([_company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__["CompanyIdValidator"], __metadata("design:paramtypes", [])], AdCompanyIdService);


/***/ }),

/***/ "../../../src/lib/validators/be/be-company-id.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/be/be-company-id.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: BeCompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeCompanyIdService", function() { return BeCompanyIdService; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_be_be_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/be/be.model */ "../../../src/data/be/be.model.ts");
/* harmony import */ var _company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../company-id-validator.decorator */ "../../../src/lib/company-id-validator.decorator.ts");
/* harmony import */ var _company_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company-id.service */ "../../../src/lib/company-id.service.ts");


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BeCompanyIdService = class BeCompanyIdService extends _company_id_service__WEBPACK_IMPORTED_MODULE_3__["CompanyIdService"] {
  constructor() {
    super('BE', _data_be_be_model__WEBPACK_IMPORTED_MODULE_1__["COMPANY_BE_DATA"]);
  }

  validate(companyId) {
    const cleanedCompanyId = this.cleanNumber(companyId);

    if (!Number.isInteger(Number(cleanedCompanyId)) || Number(cleanedCompanyId) < 0 || cleanedCompanyId.length != 10) {
      return false;
    }

    const firstPartDigits = Number(cleanedCompanyId.substring(0, cleanedCompanyId.length - 2));
    const lastPartDigits = Number(cleanedCompanyId.substring(cleanedCompanyId.length - 2));
    const checksum = (firstPartDigits + lastPartDigits) % 97;
    return checksum === 0;
  }

  cleanNumber(companyId) {
    const cleanedCompanyId = companyId.replace(this.countryCode, '').replace('(0)', '0');

    if (cleanedCompanyId.length == 9) {
      return '0' + cleanedCompanyId;
    }

    return cleanedCompanyId;
  }

  vatNumberToCompanyId(vatNumber) {
    return vatNumber.substring(2);
  }

};
BeCompanyIdService = __decorate([_company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__["CompanyIdValidator"], __metadata("design:paramtypes", [])], BeCompanyIdService);


/***/ }),

/***/ "../../../src/lib/validators/ch/ch-company-id.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/ch/ch-company-id.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ChCompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChCompanyIdService", function() { return ChCompanyIdService; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_ch_ch_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/ch/ch.model */ "../../../src/data/ch/ch.model.ts");
/* harmony import */ var _company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../company-id-validator.decorator */ "../../../src/lib/company-id-validator.decorator.ts");
/* harmony import */ var _company_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company-id.service */ "../../../src/lib/company-id.service.ts");


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ChCompanyIdService = class ChCompanyIdService extends _company_id_service__WEBPACK_IMPORTED_MODULE_3__["CompanyIdService"] {
  constructor() {
    super('CH', _data_ch_ch_model__WEBPACK_IMPORTED_MODULE_1__["COMPANY_CH_DATA"]);
  }

  validate(companyId) {
    const sanitizedCompanyId = this.sanitize(companyId);

    if (sanitizedCompanyId.length != 12 || !sanitizedCompanyId.startsWith('CHE')) {
      return false;
    }

    const digits = sanitizedCompanyId.replace('CHE', '');

    if (!Number.isInteger(Number(digits))) {
      return false;
    }

    const digitsParts = digits.split("").map(d => Number(d));
    const weights = [5, 4, 3, 2, 7, 6, 5, 4];
    let total = 0;

    for (let i = 0; i < digitsParts.length - 1; i++) {
      total += digitsParts[i] * weights[i];
    }

    const expectedDigit = 11 - total % 11;
    return expectedDigit === digitsParts[digitsParts.length - 1];
  }

  sanitize(value) {
    return super.sanitize(value).replace(/\./g, '');
  }

};
ChCompanyIdService = __decorate([_company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__["CompanyIdValidator"], __metadata("design:paramtypes", [])], ChCompanyIdService);


/***/ }),

/***/ "../../../src/lib/validators/cn/cn-company-id.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/cn/cn-company-id.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: CnCompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnCompanyIdService", function() { return CnCompanyIdService; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_cn_cn_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/cn/cn.model */ "../../../src/data/cn/cn.model.ts");
/* harmony import */ var _company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../company-id-validator.decorator */ "../../../src/lib/company-id-validator.decorator.ts");
/* harmony import */ var _company_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company-id.service */ "../../../src/lib/company-id.service.ts");


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let CnCompanyIdService = class CnCompanyIdService extends _company_id_service__WEBPACK_IMPORTED_MODULE_3__["CompanyIdService"] {
  constructor() {
    super('CN', _data_cn_cn_model__WEBPACK_IMPORTED_MODULE_1__["COMPANY_CN_DATA"]);
  }

  validate(companyId) {
    const sanitizedCompanyId = this.sanitize(companyId);

    if (sanitizedCompanyId.length !== 18) {
      return false;
    }

    const digits = sanitizedCompanyId.substring(0, sanitizedCompanyId.length - 1).split("").map(d => Number(d));
    const expectedCheckDigit = sanitizedCompanyId.substring(sanitizedCompanyId.length - 1);
    const alphabet = '0123456789ABCDEFGHJKLMNPQRTUWXY';
    const weigths = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    let total = 0;

    for (let i = 0; i < digits.length; i++) {
      const alphabetIndex = alphabet.indexOf(digits[i].toString());
      total += alphabetIndex * weigths[i];
    }

    const checkDigit = alphabet[31 - total % 31];
    return expectedCheckDigit === checkDigit;
  }

};
CnCompanyIdService = __decorate([_company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__["CompanyIdValidator"], __metadata("design:paramtypes", [])], CnCompanyIdService);


/***/ }),

/***/ "../../../src/lib/validators/fr/fr-company-id.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/fr/fr-company-id.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FrCompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrCompanyIdService", function() { return FrCompanyIdService; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_fr_fr_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/fr/fr.model */ "../../../src/data/fr/fr.model.ts");
/* harmony import */ var _company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../company-id-validator.decorator */ "../../../src/lib/company-id-validator.decorator.ts");
/* harmony import */ var _company_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company-id.service */ "../../../src/lib/company-id.service.ts");
/* harmony import */ var _utils_luhn_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/luhn.utils */ "../../../src/lib/validators/utils/luhn.utils.ts");


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Validate french companies identifiers: SIREN, SIRET.
 * You can use the INSEE webiste to manually validate french company identifiers
 * Please see {@link https://avis-situation-sirene.insee.fr/}
 */

let FrCompanyIdService = class FrCompanyIdService extends _company_id_service__WEBPACK_IMPORTED_MODULE_3__["CompanyIdService"] {
  constructor() {
    super('FR', _data_fr_fr_model__WEBPACK_IMPORTED_MODULE_1__["COMPANY_FR_DATA"]);
  }
  /**
   * The Luhn checksum is used to validate SIREN OR SIRET identifiers.
   */


  validate(companyId) {
    return _utils_luhn_utils__WEBPACK_IMPORTED_MODULE_4__["LuhnUtils"].validate(this.sanitize(companyId));
  }

  companyIdToVATNumber(companyId) {
    const vatCompanyId = !this.isParentLevelCompanyId(companyId) ? this.toParentCompanyId(companyId) : companyId;
    const vatKey = (12 + 3 * (parseInt(vatCompanyId, 10) % 97)) % 97;
    return `FR${vatKey}${vatCompanyId}`;
  }

  vatNumberToCompanyId(vatNumber) {
    return vatNumber.substring(2);
  }

  toParentCompanyId(companyId) {
    return companyId.substring(0, 9);
  }

};
FrCompanyIdService = __decorate([_company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__["CompanyIdValidator"], __metadata("design:paramtypes", [])], FrCompanyIdService);


/***/ }),

/***/ "../../../src/lib/validators/index.ts":
/*!**************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FrCompanyIdService, BeCompanyIdService, ChCompanyIdService, AdCompanyIdService, ItCompanyIdService, CnCompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fr_fr_company_id_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fr/fr-company-id.service */ "../../../src/lib/validators/fr/fr-company-id.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrCompanyIdService", function() { return _fr_fr_company_id_service__WEBPACK_IMPORTED_MODULE_1__["FrCompanyIdService"]; });

/* harmony import */ var _be_be_company_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./be/be-company-id.service */ "../../../src/lib/validators/be/be-company-id.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeCompanyIdService", function() { return _be_be_company_id_service__WEBPACK_IMPORTED_MODULE_2__["BeCompanyIdService"]; });

/* harmony import */ var _ch_ch_company_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ch/ch-company-id.service */ "../../../src/lib/validators/ch/ch-company-id.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChCompanyIdService", function() { return _ch_ch_company_id_service__WEBPACK_IMPORTED_MODULE_3__["ChCompanyIdService"]; });

/* harmony import */ var _ad_ad_company_id_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ad/ad-company-id.service */ "../../../src/lib/validators/ad/ad-company-id.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdCompanyIdService", function() { return _ad_ad_company_id_service__WEBPACK_IMPORTED_MODULE_4__["AdCompanyIdService"]; });

/* harmony import */ var _it_it_company_id_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./it/it-company-id.service */ "../../../src/lib/validators/it/it-company-id.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItCompanyIdService", function() { return _it_it_company_id_service__WEBPACK_IMPORTED_MODULE_5__["ItCompanyIdService"]; });

/* harmony import */ var _cn_cn_company_id_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cn/cn-company-id.service */ "../../../src/lib/validators/cn/cn-company-id.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CnCompanyIdService", function() { return _cn_cn_company_id_service__WEBPACK_IMPORTED_MODULE_6__["CnCompanyIdService"]; });









/***/ }),

/***/ "../../../src/lib/validators/it/it-company-id.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/it/it-company-id.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ItCompanyIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItCompanyIdService", function() { return ItCompanyIdService; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_it_it_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/it/it.model */ "../../../src/data/it/it.model.ts");
/* harmony import */ var _company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../company-id-validator.decorator */ "../../../src/lib/company-id-validator.decorator.ts");
/* harmony import */ var _company_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company-id.service */ "../../../src/lib/company-id.service.ts");
/* harmony import */ var _utils_luhn_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/luhn.utils */ "../../../src/lib/validators/utils/luhn.utils.ts");


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ItCompanyIdService = class ItCompanyIdService extends _company_id_service__WEBPACK_IMPORTED_MODULE_3__["CompanyIdService"] {
  constructor() {
    super('IT', _data_it_it_model__WEBPACK_IMPORTED_MODULE_1__["COMPANY_IT_DATA"]);
  }

  validate(companyId) {
    let sanitizedCompanyId = companyId.replace(' ', '').replace('-', '').replace(':', '').toUpperCase();

    if (sanitizedCompanyId.startsWith(this.countryCode)) {
      sanitizedCompanyId = sanitizedCompanyId.replace(this.countryCode, '');
    }

    if (sanitizedCompanyId.length != 11) {
      return false;
    }

    if (!Number.isInteger(Number(sanitizedCompanyId)) || Number(sanitizedCompanyId.substring(0, 7)) === 0) {
      return false;
    }

    const firstPartDigit = Number(sanitizedCompanyId.substring(7, 10));

    if ((firstPartDigit < 1 || firstPartDigit > 100) && ![120, 121, 888, 999].includes(firstPartDigit)) {
      return false;
    }

    return _utils_luhn_utils__WEBPACK_IMPORTED_MODULE_4__["LuhnUtils"].validate(sanitizedCompanyId);
  }

  vatNumberToCompanyId(vatNumber) {
    return vatNumber;
  }

  companyIdToVATNumber(companyId) {
    return companyId;
  }

};
ItCompanyIdService = __decorate([_company_id_validator_decorator__WEBPACK_IMPORTED_MODULE_2__["CompanyIdValidator"], __metadata("design:paramtypes", [])], ItCompanyIdService);


/***/ }),

/***/ "../../../src/lib/validators/utils/luhn.utils.ts":
/*!*************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/src/lib/validators/utils/luhn.utils.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LuhnUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuhnUtils", function() { return LuhnUtils; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Implements the Luhn algorithm
 * Please see {@link https://en.wikipedia.org/wiki/Luhn_algorithm}
 */
class LuhnUtils {
  static validate(value) {
    const len = value.length;
    const parity = len % 2;
    let sum = 0;

    for (let i = len - 1; i >= 0; i--) {
      let d = parseInt(value.charAt(i));

      if (i % 2 == parity) {
        d *= 2;
      }

      if (d > 9) {
        d -= 9;
      }

      sum += d;
    }

    return sum % 10 == 0;
  }

}

/***/ }),

/***/ "../../@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../buffer-from/index.js":
/*!********************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/buffer-from/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable node/no-deprecated-api */

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer !== 'undefined' &&
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ "../../countries-db/dist/index.js":
/*!**************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/countries-db/dist/index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(i,a){ true?module.exports=a():undefined}(this,function(){"use strict";function e(i,a,n){return a in i?Object.defineProperty(i,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[a]=n,i}function c(a,i){var n,c=Object.keys(a);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(a),i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),c.push.apply(c,n)),c}function o(a){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?c(Object(n),!0).forEach(function(i){e(a,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(n,i))})}return a}var r={AD:{n:"Andorra",on:"The Principality of Andorra",e:"🇦🇩",eu:"U+1F1E6 U+1F1E9",i2:"AD",i3:"AND",in:"020",gi:3041565,ci:"EU",p:84e3,l:1802,a:468,c:{a:42.55,o:1.58333},t:["Europe/Andorra"],d:".ad",cc:"EUR",cn:"Euro",pf:"AD###",pr:"^(?:AD)*(\\d{3})$",pc:"+376",ni:["ES","FR"],lg:["ca"],lc:["ca"]},AE:{n:"United Arab Emirates",on:"The United Arab Emirates",e:"🇦🇪",eu:"U+1F1E6 U+1F1EA",i2:"AE",i3:"ARE",in:"784",gi:290557,ci:"AS",p:4975593,l:96,a:82880,c:{a:23.75,o:54.5},t:["Asia/Dubai"],d:".ae",cc:"AED",cn:"Dirham",pc:"+971",ni:["SA","OM"],lg:["ar","fa","en","hi","ur"],lc:["ar-AE","fa","en","hi","ur"]},AF:{n:"Afghanistan",on:"The Islamic Republic of Afghanistan",e:"🇦🇫",eu:"U+1F1E6 U+1F1EB",i2:"AF",i3:"AFG",in:"004",gi:1149361,ci:"AS",p:29121286,l:2260,a:647500,c:{a:33,o:66},t:["Asia/Kabul"],d:".af",cc:"AFN",cn:"Afghani",pc:"+93",ni:["TM","CN","IR","TJ","PK","UZ"],lg:["fa","ps","uz","tk"],lc:["fa-AF","ps","uz-AF","tk"]},AG:{n:"Antigua and Barbuda",on:"Antigua and Barbuda",e:"🇦🇬",eu:"U+1F1E6 U+1F1EC",i2:"AG",i3:"ATG",in:"028",gi:3576396,ci:"NA",p:86754,l:65,a:443,c:{a:17.05,o:-61.8},t:["America/Antigua"],d:".ag",cc:"XCD",cn:"Dollar",pc:"+1-268",lg:["en"],lc:["en-AG"]},AI:{n:"Anguilla",on:"Anguilla",e:"🇦🇮",eu:"U+1F1E6 U+1F1EE",i2:"AI",i3:"AIA",in:"660",gi:3573511,ci:"NA",p:13254,l:19,a:102,c:{a:18.2167,o:-63.05},t:["America/Anguilla"],d:".ai",cc:"XCD",cn:"Dollar",pc:"+1-264",lg:["en"],lc:["en-AI"]},AL:{n:"Albania",on:"The Republic of Albania",e:"🇦🇱",eu:"U+1F1E6 U+1F1F1",i2:"AL",i3:"ALB",in:"008",gi:783754,ci:"EU",p:2986952,l:89,a:28748,c:{a:41,o:20},t:["Europe/Tirane"],d:".al",cc:"ALL",cn:"Lek",pf:"####",pr:"^(\\d{4})$",pc:"+355",ni:["MK","GR","ME","RS","XK"],lg:["sq","el"],lc:["sq","el"]},AM:{n:"Armenia",on:"The Republic of Armenia",e:"🇦🇲",eu:"U+1F1E6 U+1F1F2",i2:"AM",i3:"ARM",in:"051",gi:174982,ci:"AS",p:2968e3,l:2768,a:29800,c:{a:40.25,o:45},t:["Asia/Yerevan"],d:".am",cc:"AMD",cn:"Dram",pf:"######",pr:"^(\\d{6})$",pc:"+374",ni:["GE","IR","AZ","TR"],lg:["hy"],lc:["hy"]},AO:{n:"Angola",on:"The Republic of Angola",e:"🇦🇴",eu:"U+1F1E6 U+1F1F4",i2:"AO",i3:"AGO",in:"024",gi:3351879,ci:"AF",p:13068161,l:1355,a:1246700,c:{a:-12.5,o:18.5},t:["Africa/Luanda"],d:".ao",cc:"AOA",cn:"Kwanza",pc:"+244",ni:["CD","NA","ZM","CG"],lg:["pt"],lc:["pt-AO"]},AQ:{n:"Antarctica",on:"All land and ice shelves south of the 60th parallel south",e:"🇦🇶",eu:"U+1F1E6 U+1F1F6",i2:"AQ",i3:"ATA",in:"010",gi:6697173,ci:"AN",p:1106,l:2500,a:142e5,c:{a:-82.8628,o:-135},t:["Antarctica/McMurdo","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Mawson","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok"],d:".aq"},AR:{n:"Argentina",on:"The Argentine Republic",e:"🇦🇷",eu:"U+1F1E6 U+1F1F7",i2:"AR",i3:"ARG",in:"032",gi:3865483,ci:"SA",p:41343201,l:189,a:2766890,c:{a:-34,o:-64},t:["America/Buenos_Aires","America/Argentina/ComodRivadavia","America/Catamarca","America/Cordoba","America/Rosario","America/Jujuy","America/Mendoza","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia"],d:".ar",cc:"ARS",cn:"Peso",pf:"@####@@@",pr:"^[A-Z]?\\d{4}[A-Z]{0,3}$",pc:"+54",ni:["CL","BO","UY","PY","BR"],lg:["es","en","it","de","fr","gn"],lc:["es-AR","en","it","de","fr","gn"]},AS:{n:"American Samoa",on:"The Territory of American Samoa",e:"🇦🇸",eu:"U+1F1E6 U+1F1F8",i2:"AS",i3:"ASM",in:"016",gi:5880801,ci:"OC",p:57881,a:199,c:{a:-14.271,o:170.1322},t:["Pacific/Samoa","US/Samoa","Pacific/Pago_Pago"],d:".as",cc:"USD",cn:"Dollar",pf:"#####-####",pr:"^d{5}-d{4}$",pc:"+1-684",lg:["en","sm","to"],lc:["en-AS","sm","to"]},AT:{n:"Austria",on:"The Republic of Austria",e:"🇦🇹",eu:"U+1F1E6 U+1F1F9",i2:"AT",i3:"AUT",in:"040",gi:2782113,ci:"EU",p:8205e3,l:1359,a:83858,c:{a:47.3333,o:13.3333},t:["Europe/Vienna"],d:".at",cc:"EUR",cn:"Euro",pf:"####",pr:"^(\\d{4})$",pc:"+43",ni:["CH","DE","HU","SK","CZ","IT","SI","LI"],lg:["de","hr","hu","sl"],lc:["de-AT","hr","hu","sl"]},AU:{n:"Australia",on:"The Commonwealth of Australia",e:"🇦🇺",eu:"U+1F1E6 U+1F1FA",i2:"AU",i3:"AUS",in:"036",gi:2077456,ci:"OC",p:21515754,l:269,a:7686850,c:{a:-25,o:135},t:["Australia/South","Australia/Queensland","Australia/Yancowinna","Australia/North","Australia/Tasmania","Australia/LHI","Australia/Victoria","Australia/West","Australia/ACT","Australia/Canberra","Australia/NSW","Antarctica/Macquarie","Australia/Sydney","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lord_Howe","Australia/Lindeman","Australia/Melbourne","Australia/Perth"],d:".au",cc:"AUD",cn:"Dollar",pf:"####",pr:"^(\\d{4})$",pc:"+61",lg:["en"],lc:["en-AU"]},AW:{n:"Aruba",on:"Aruba",e:"🇦🇼",eu:"U+1F1E6 U+1F1FC",i2:"AW",i3:"ABW",in:"533",gi:3577279,ci:"NA",p:71566,l:31,a:193,c:{a:12.5,o:-69.9667},t:["America/Aruba"],d:".aw",cc:"AWG",cn:"Guilder",pc:"+297",lg:["nl","pap","es","en"],lc:["nl-AW","pap","es","en"]},AX:{n:"Åland Islands",on:"Åland",e:"🇦🇽",eu:"U+1F1E6 U+1F1FD",i2:"AX",i3:"ALA",in:"248",gi:661882,ci:"EU",p:26711,l:6,a:1580,c:{a:60.25,o:20},t:["Europe/Mariehamn"],d:".ax",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(?:FI)*(\\d{5})$",pc:"+358-18",lg:["sv"],lc:["sv-AX"]},AZ:{n:"Azerbaijan",on:"The Republic of Azerbaijan",e:"🇦🇿",eu:"U+1F1E6 U+1F1FF",i2:"AZ",i3:"AZE",in:"031",gi:587116,ci:"AS",p:8303512,l:12,a:86600,c:{a:40.5,o:47.5},t:["Asia/Baku"],d:".az",cc:"AZN",cn:"Manat",pf:"AZ ####",pr:"^(?:AZ)*(\\d{4})$",pc:"+994",ni:["GE","IR","AM","TR","RU"],lg:["az","ru","hy"],lc:["az","ru","hy"]},BA:{n:"Bosnia and Herzegovina",on:"Bosnia and Herzegovina",e:"🇧🇦",eu:"U+1F1E7 U+1F1E6",i2:"BA",i3:"BIH",in:"070",gi:3277605,ci:"EU",p:459e4,l:876,a:51129,c:{a:44.25,o:17.8333},t:["Europe/Sarajevo"],d:".ba",cc:"BAM",cn:"Marka",pf:"#####",pr:"^(\\d{5})$",pc:"+387",ni:["HR","ME","RS"],lg:["bs","hr","sr"],lc:["bs","hr-BA","sr-BA"]},BB:{n:"Barbados",on:"Barbados",e:"🇧🇧",eu:"U+1F1E7 U+1F1E7",i2:"BB",i3:"BRB",in:"052",gi:3374084,ci:"NA",p:285653,l:222,a:431,c:{a:13.1645,o:-59.5517},t:["America/Barbados"],d:".bb",cc:"BBD",cn:"Dollar",pf:"BB#####",pr:"^(?:BB)*(\\d{5})$",pc:"+1-246",lg:["en"],lc:["en-BB"]},BD:{n:"Bangladesh",on:"The People's Republic of Bangladesh",e:"🇧🇩",eu:"U+1F1E7 U+1F1E9",i2:"BD",i3:"BGD",in:"050",gi:1210997,ci:"AS",p:156118464,l:10,a:144e3,c:{a:24,o:90},t:["Asia/Dacca","Asia/Dhaka"],d:".bd",cc:"BDT",cn:"Taka",pf:"####",pr:"^(\\d{4})$",pc:"+880",ni:["MM","IN"],lg:["bn","en"],lc:["bn-BD","en"]},BE:{n:"Belgium",on:"The Kingdom of Belgium",e:"🇧🇪",eu:"U+1F1E7 U+1F1EA",i2:"BE",i3:"BEL",in:"056",gi:2802361,ci:"EU",p:10403e3,l:91,a:30510,c:{a:50.75,o:4.5},t:["Europe/Brussels"],d:".be",cc:"EUR",cn:"Euro",pf:"####",pr:"^(\\d{4})$",pc:"+32",ni:["DE","NL","LU","FR"],lg:["nl","fr","de"],lc:["nl-BE","fr-BE","de-BE"]},BF:{n:"Burkina Faso",on:"Burkina Faso",e:"🇧🇫",eu:"U+1F1E7 U+1F1EB",i2:"BF",i3:"BFA",in:"854",gi:2361809,ci:"AF",p:16241811,l:313,a:274200,c:{a:12.5,o:-1.66667},t:["Africa/Ouagadougou"],d:".bf",cc:"XOF",cn:"Franc",pc:"+226",ni:["NE","BJ","GH","CI","TG","ML"],lg:["fr","mos"],lc:["fr-BF","mos"]},BG:{n:"Bulgaria",on:"The Republic of Bulgaria",e:"🇧🇬",eu:"U+1F1E7 U+1F1EC",i2:"BG",i3:"BGR",in:"100",gi:732800,ci:"EU",p:7148785,l:442,a:110910,c:{a:42.6667,o:25.25},t:["Europe/Sofia"],d:".bg",cc:"BGN",cn:"Lev",pf:"####",pr:"^(\\d{4})$",pc:"+359",ni:["MK","GR","RO","TR","RS"],lg:["bg","tr","rom"],lc:["bg","tr-BG","rom"]},BH:{n:"Bahrain",on:"The Kingdom of Bahrain",e:"🇧🇭",eu:"U+1F1E7 U+1F1ED",i2:"BH",i3:"BHR",in:"048",gi:290291,ci:"AS",p:738004,l:77,a:665,c:{a:26.0333,o:50.55},t:["Asia/Bahrain"],d:".bh",cc:"BHD",cn:"Dinar",pf:"####|###",pr:"^(\\d{3}\\d?)$",pc:"+973",lg:["ar","en","fa","ur"],lc:["ar-BH","en","fa","ur"]},BI:{n:"Burundi",on:"The Republic of Burundi",e:"🇧🇮",eu:"U+1F1E7 U+1F1EE",i2:"BI",i3:"BDI",in:"108",gi:433561,ci:"AF",p:9863117,l:1732,a:27830,c:{a:-3.5,o:30},t:["Africa/Bujumbura"],d:".bi",cc:"BIF",cn:"Franc",pc:"+257",ni:["TZ","CD","RW"],lg:["fr","rn"],lc:["fr-BI","rn"]},BJ:{n:"Benin",on:"The Republic of Benin",e:"🇧🇯",eu:"U+1F1E7 U+1F1EF",i2:"BJ",i3:"BEN",in:"204",gi:2395170,ci:"AF",p:9056010,l:334,a:112620,c:{a:9.5,o:2.25},t:["Africa/Porto-Novo"],d:".bj",cc:"XOF",cn:"Franc",pc:"+229",ni:["NE","TG","BF","NG"],lg:["fr"],lc:["fr-BJ"]},BL:{n:"Saint Barthélemy",on:"The Collectivity of Saint-Barthélemy",e:"🇧🇱",eu:"U+1F1E7 U+1F1F1",i2:"BL",i3:"BLM",in:"652",gi:3578476,ci:"NA",p:8450,l:57,a:21,c:{a:17.9,o:-62.8257},t:["America/St_Barthelemy"],d:".bl",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+590",lg:["fr"],lc:["fr"]},BM:{n:"Bermuda",on:"Bermuda",e:"🇧🇲",eu:"U+1F1E7 U+1F1F2",i2:"BM",i3:"BMU",in:"060",gi:3573345,ci:"NA",p:65365,l:8,a:53,c:{a:32.3302,o:-64.74},t:["Atlantic/Bermuda"],d:".bm",cc:"BMD",cn:"Dollar",pf:"@@ ##",pr:"^([A-Z]{2}\\d{2})$",pc:"+1-441",lg:["en","pt"],lc:["en-BM","pt"]},BN:{n:"Brunei",on:"The Nation of Brunei",e:"🇧🇳",eu:"U+1F1E7 U+1F1F3",i2:"BN",i3:"BRN",in:"096",gi:1820814,ci:"AS",p:395027,l:95,a:5770,c:{a:4.5,o:114.667},t:["Asia/Brunei"],d:".bn",cc:"BND",cn:"Dollar",pf:"@@####",pr:"^([A-Z]{2}\\d{4})$",pc:"+673",ni:["MY"],lg:["ms","en"],lc:["ms-BN","en-BN"]},BO:{n:"Bolivia",on:"The Plurinational State of Bolivia",e:"🇧🇴",eu:"U+1F1E7 U+1F1F4",i2:"BO",i3:"BOL",in:"068",gi:3923057,ci:"SA",p:9947418,l:233,a:1098580,c:{a:-17,o:-65},t:["America/La_Paz"],d:".bo",cc:"BOB",cn:"Boliviano",pc:"+591",ni:["PE","CL","PY","BR","AR"],lg:["es","qu","ay"],lc:["es-BO","qu","ay"]},BQ:{n:"Bonaire, Sint Eustatius and Saba",on:"Bonaire, Sint Eustatius and Saba",e:"🇧🇶",eu:"U+1F1E7 U+1F1F6",i2:"BQ",i3:"BES",in:"535",gi:7626844,ci:"NA",p:18012,l:118,a:328,c:{a:12.2129,o:-68.2944},t:["America/Kralendijk"],d:".bq",cc:"USD",cn:"Dollar",pc:"+599",lg:["nl","pap","en"],lc:["nl","pap","en"]},BR:{n:"Brazil",on:"The Federative Republic of Brazil",e:"🇧🇷",eu:"U+1F1E7 U+1F1F7",i2:"BR",i3:"BRA",in:"076",gi:3469034,ci:"SA",p:201103330,l:258,a:8511965,c:{a:-10,o:-55},t:["Brazil/West","Brazil/DeNoronha","America/Porto_Acre","Brazil/Acre","Brazil/East","America/Araguaina","America/Bahia","America/Belem","America/Boa_Vista","America/Campo_Grande","America/Cuiaba","America/Eirunepe","America/Fortaleza","America/Maceio","America/Manaus","America/Noronha","America/Rio_Branco","America/Porto_Velho","America/Recife","America/Santarem","America/Sao_Paulo"],d:".br",cc:"BRL",cn:"Real",pf:"#####-###",pr:"^\\d{5}-\\d{3}$",pc:"+55",ni:["SR","PE","BO","UY","GY","PY","GF","VE","CO","AR"],lg:["pt","es","en","fr"],lc:["pt-BR","es","en","fr"]},BS:{n:"Bahamas",on:"The Commonwealth of The Bahamas",e:"🇧🇸",eu:"U+1F1E7 U+1F1F8",i2:"BS",i3:"BHS",in:"044",gi:3572887,ci:"NA",p:301790,l:20,a:13940,c:{a:25.0408,o:-77.3712},t:["America/Nassau"],d:".bs",cc:"BSD",cn:"Dollar",pc:"+1-242",lg:["en"],lc:["en-BS"]},BT:{n:"Bhutan",on:"The Kingdom of Bhutan",e:"🇧🇹",eu:"U+1F1E7 U+1F1F9",i2:"BT",i3:"BTN",in:"064",gi:1252634,ci:"AS",p:699847,l:1816,a:47e3,c:{a:27.5,o:90.5},t:["Asia/Thimbu","Asia/Thimphu"],d:".bt",cc:"BTN",cn:"Ngultrum",pc:"+975",ni:["CN","IN"],lg:["dz"],lc:["dz"]},BV:{n:"Bouvet Island",on:"Bouvet Island",e:"🇧🇻",eu:"U+1F1E7 U+1F1FB",i2:"BV",i3:"BVT",in:"074",gi:3371123,ci:"AN",l:240,a:49,c:{a:-54.4333,o:3.4},cc:"NOK",cn:"Krone"},BW:{n:"Botswana",on:"The Republic of Botswana",e:"🇧🇼",eu:"U+1F1E7 U+1F1FC",i2:"BW",i3:"BWA",in:"072",gi:933860,ci:"AF",p:2029307,l:963,a:600370,c:{a:-22,o:24},t:["Africa/Gaborone"],d:".bw",cc:"BWP",cn:"Pula",pc:"+267",ni:["ZW","ZA","NA"],lg:["en","tn"],lc:["en-BW","tn-BW"]},BY:{n:"Belarus",on:"The Republic of Belarus",e:"🇧🇾",eu:"U+1F1E7 U+1F1FE",i2:"BY",i3:"BLR",in:"112",gi:630336,ci:"EU",p:9685e3,l:144,a:207600,c:{a:53,o:28},t:["Europe/Minsk"],d:".by",cc:"BYN",cn:"Belarusian ruble",pf:"######",pr:"^(\\d{6})$",pc:"+375",ni:["PL","LT","UA","RU","LV"],lg:["be","ru"],lc:["be","ru"]},BZ:{n:"Belize",on:"Belize",e:"🇧🇿",eu:"U+1F1E7 U+1F1FF",i2:"BZ",i3:"BLZ",in:"084",gi:3582678,ci:"NA",p:314522,l:69,a:22966,c:{a:17.25,o:-88.75},t:["America/Belize"],d:".bz",cc:"BZD",cn:"Dollar",pc:"+501",ni:["GT","MX"],lg:["en","es"],lc:["en-BZ","es"]},CA:{n:"Canada",on:"Canada",e:"🇨🇦",eu:"U+1F1E8 U+1F1E6",i2:"CA",i3:"CAN",in:"124",gi:6251999,ci:"NA",p:33679e3,l:292,a:9984670,c:{a:60.1087,o:-113.643},t:["America/Coral_Harbour","Canada/Mountain","Canada/Atlantic","Canada/Saskatchewan","Canada/Newfoundland","America/Montreal","Canada/Eastern","Canada/Pacific","Canada/Yukon","Canada/Central","America/Atikokan","America/Blanc-Sablon","America/Cambridge_Bay","America/Creston","America/Dawson_Creek","America/Dawson","America/Edmonton","America/Fort_Nelson","America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Inuvik","America/Iqaluit","America/Moncton","America/Toronto","America/Nipigon","America/Pangnirtung","America/Rainy_River","America/Rankin_Inlet","America/Regina","America/Resolute","America/St_Johns","America/Swift_Current","America/Thunder_Bay","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yellowknife"],d:".ca",cc:"CAD",cn:"Dollar",pf:"@#@ #@#",pr:"^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$ ",pc:"+1",ni:["US"],lg:["en","fr","iu"],lc:["en-CA","fr-CA","iu"]},CC:{n:"Cocos",on:"The Territory of Cocos Islands",e:"🇨🇨",eu:"U+1F1E8 U+1F1E8",i2:"CC",i3:"CCK",in:"166",gi:1547376,ci:"AS",p:628,l:-9999,a:14,c:{a:-12.1642,o:96.8733},t:["Indian/Cocos"],d:".cc",cc:"AUD",cn:"Dollar",pc:"+61",lg:["ms","en"],lc:["ms-CC","en"]},CD:{n:"Congo",on:"The Democratic Republic of the Congo",e:"🇨🇩",eu:"U+1F1E8 U+1F1E9",i2:"CD",i3:"COD",in:"180",gi:203312,ci:"AF",p:70916439,l:441,a:2345410,c:{a:-2.5,o:23.5},t:["Africa/Kinshasa","Africa/Lubumbashi"],d:".cd",cc:"CDF",cn:"Franc",pc:"+243",ni:["TZ","CF","SS","RW","ZM","BI","UG","CG","AO"],lg:["fr","ln","ktu","kg","sw","lua"],lc:["fr-CD","ln","ktu","kg","sw","lua"]},CF:{n:"Central African Republic",on:"The Central African Republic",e:"🇨🇫",eu:"U+1F1E8 U+1F1EB",i2:"CF",i3:"CAF",in:"140",gi:239880,ci:"AF",p:4844927,l:527,a:622984,c:{a:7,o:21},t:["Africa/Bangui"],d:".cf",cc:"XAF",cn:"Franc",pc:"+236",ni:["TD","SD","CD","SS","CM","CG"],lg:["fr","sg","ln","kg"],lc:["fr-CF","sg","ln","kg"]},CG:{n:"Congo",on:"The Republic of the Congo",e:"🇨🇬",eu:"U+1F1E8 U+1F1EC",i2:"CG",i3:"COG",in:"178",gi:2260494,ci:"AF",p:3039126,l:396,a:342e3,c:{a:-1,o:15.5},t:["Africa/Brazzaville"],d:".cg",cc:"XAF",cn:"Franc",pc:"+242",ni:["CF","GA","CD","CM","AO"],lg:["fr","kg","ln"],lc:["fr-CG","kg","ln-CG"]},CH:{n:"Switzerland",on:"The Swiss Confederation",e:"🇨🇭",eu:"U+1F1E8 U+1F1ED",i2:"CH",i3:"CHE",in:"756",gi:2658434,ci:"EU",p:8484100,l:931,a:41290,c:{a:47.0002,o:8.01427},t:["Europe/Zurich"],d:".ch",cc:"CHF",cn:"Franc",pf:"####",pr:"^(\\d{4})$",pc:"+41",ni:["DE","IT","LI","FR","AT"],lg:["de","fr","it","rm"],lc:["de-CH","fr-CH","it-CH","rm"]},CI:{n:"Ivory Coast",on:"The Republic of Côte d'Ivoire",e:"🇨🇮",eu:"U+1F1E8 U+1F1EE",i2:"CI",i3:"CIV",in:"384",gi:2287781,ci:"AF",p:21058798,l:257,a:322460,c:{a:8,o:-5.5},t:["Africa/Timbuktu","Africa/Abidjan"],d:".ci",cc:"XOF",cn:"Franc",pc:"+225",ni:["LR","GH","GN","BF","ML"],lg:["fr"],lc:["fr-CI"]},CK:{n:"Cook Islands",on:"The Cook Islands",e:"🇨🇰",eu:"U+1F1E8 U+1F1F0",i2:"CK",i3:"COK",in:"184",gi:1899402,ci:"OC",p:21388,l:125,a:240,c:{a:-21.2484,o:-159.785},t:["Pacific/Rarotonga"],d:".ck",cc:"NZD",cn:"Dollar",pc:"+682",lg:["en","mi"],lc:["en-CK","mi"]},CL:{n:"Chile",on:"The Republic of Chile",e:"🇨🇱",eu:"U+1F1E8 U+1F1F1",i2:"CL",i3:"CHL",in:"152",gi:3895114,ci:"SA",p:16746491,l:297,a:756950,c:{a:-30,o:-71},t:["Chile/Continental","Chile/EasterIsland","America/Punta_Arenas","America/Santiago","Pacific/Easter"],d:".cl",cc:"CLP",cn:"Peso",pf:"#######",pr:"^(\\d{7})$",pc:"+56",ni:["PE","BO","AR"],lg:["es"],lc:["es-CL"]},CM:{n:"Cameroon",on:"The Republic of Cameroon",e:"🇨🇲",eu:"U+1F1E8 U+1F1F2",i2:"CM",i3:"CMR",in:"120",gi:2233387,ci:"AF",p:19294149,l:720,a:475440,c:{a:6,o:12.5},t:["Africa/Douala"],d:".cm",cc:"XAF",cn:"Franc",pc:"+237",ni:["TD","CF","GA","GQ","CG","NG"],lg:["en","fr"],lc:["en-CM","fr-CM"]},CN:{n:"China",on:"The People's Republic of China",e:"🇨🇳",eu:"U+1F1E8 U+1F1F3",i2:"CN",i3:"CHN",in:"156",gi:1814991,ci:"AS",p:1330044e3,l:1982,a:9596960,c:{a:35,o:105},t:["Asia/Chongqing","Asia/Chungking","Asia/Harbin","PRC","Asia/Kashgar","Asia/Shanghai","Asia/Urumqi"],d:".cn",cc:"CNY",cn:"Yuan Renminbi",pf:"######",pr:"^(\\d{6})$",pc:"+86",ni:["LA","BT","TJ","KZ","MN","AF","NP","MM","KG","PK","KP","RU","VN","IN"],lg:["zh","yue","wuu","dta","ug","za"],lc:["zh-CN","yue","wuu","dta","ug","za"]},CO:{n:"Colombia",on:"The Republic of Colombia",e:"🇨🇴",eu:"U+1F1E8 U+1F1F4",i2:"CO",i3:"COL",in:"170",gi:3686110,ci:"SA",p:4779e4,l:223,a:1138910,c:{a:4,o:-73.25},t:["America/Bogota"],d:".co",cc:"COP",cn:"Peso",pf:"######",pr:"^(\\d{6})$",pc:"+57",ni:["EC","PE","PA","BR","VE"],lg:["es"],lc:["es-CO"]},CR:{n:"Costa Rica",on:"The Republic of Costa Rica",e:"🇨🇷",eu:"U+1F1E8 U+1F1F7",i2:"CR",i3:"CRI",in:"188",gi:3624060,ci:"NA",p:4516220,l:1415,a:51100,c:{a:10,o:-84},t:["America/Costa_Rica"],d:".cr",cc:"CRC",cn:"Colon",pf:"#####",pr:"^(\\d{5})$",pc:"+506",ni:["PA","NI"],lg:["es","en"],lc:["es-CR","en"]},CU:{n:"Cuba",on:"The Republic of Cuba",e:"🇨🇺",eu:"U+1F1E8 U+1F1FA",i2:"CU",i3:"CUB",in:"192",gi:3562981,ci:"NA",p:11423e3,l:109,a:110860,c:{a:22,o:-79.5},t:["Cuba","America/Havana"],d:".cu",cc:"CUP",cn:"Peso",pf:"CP #####",pr:"^(?:CP)*(\\d{5})$",pc:"+53",ni:["US"],lg:["es","pap"],lc:["es-CU","pap"]},CV:{n:"Cabo Verde",on:"The Republic of Cabo Verde",e:"🇨🇻",eu:"U+1F1E8 U+1F1FB",i2:"CV",i3:"CPV",in:"132",gi:3374766,ci:"AF",p:508659,l:-9999,a:4033,c:{a:16,o:-24},t:["Atlantic/Cape_Verde"],d:".cv",cc:"CVE",cn:"Escudo",pf:"####",pr:"^(\\d{4})$",pc:"+238",lg:["pt"],lc:["pt-CV"]},CW:{n:"Curaçao",on:"The Country of Curaçao",e:"🇨🇼",eu:"U+1F1E8 U+1F1FC",i2:"CW",i3:"CUW",in:"531",gi:7626836,ci:"NA",p:141766,l:39,a:444,c:{a:12.1667,o:-68.9667},t:["America/Curacao"],d:".cw",cc:"ANG",cn:"Guilder",pc:"+599",lg:["nl","pap"],lc:["nl","pap"]},CX:{n:"Christmas Island",on:"The Territory of Christmas Island",e:"🇨🇽",eu:"U+1F1E8 U+1F1FD",i2:"CX",i3:"CXR",in:"162",gi:2078138,ci:"OC",p:1500,l:234,a:135,c:{a:-10.5,o:105.667},t:["Etc/GMT-7","Indian/Christmas"],d:".cx",cc:"AUD",cn:"Dollar",pf:"####",pr:"^(\\d{4})$",pc:"+61",lg:["en","zh","ms"],lc:["en","zh","ms-CC"]},CY:{n:"Cyprus",on:"The Republic of Cyprus",e:"🇨🇾",eu:"U+1F1E8 U+1F1FE",i2:"CY",i3:"CYP",in:"196",gi:146669,ci:"EU",p:1102677,l:698,a:9250,c:{a:35,o:33},t:["Europe/Nicosia","Asia/Famagusta","Asia/Nicosia"],d:".cy",cc:"EUR",cn:"Euro",pf:"####",pr:"^(\\d{4})$",pc:"+357",lg:["el","tr","en"],lc:["el-CY","tr-CY","en"]},CZ:{n:"Czechia",on:"The Czech Republic",e:"🇨🇿",eu:"U+1F1E8 U+1F1FF",i2:"CZ",i3:"CZE",in:"203",gi:3077311,ci:"EU",p:10476e3,l:430,a:78866,c:{a:49.75,o:15},t:["Europe/Prague"],d:".cz",cc:"CZK",cn:"Koruna",pf:"### ##",pr:"^\\d{3}\\s?\\d{2}$",pc:"+420",ni:["PL","DE","SK","AT"],lg:["cs","sk"],lc:["cs","sk"]},DE:{n:"Germany",on:"The Federal Republic of Germany",e:"🇩🇪",eu:"U+1F1E9 U+1F1EA",i2:"DE",i3:"DEU",in:"276",gi:2921044,ci:"EU",p:81802257,l:303,a:357021,c:{a:51.5,o:10.5},t:["Europe/Busingen","Europe/Berlin"],d:".de",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+49",ni:["CH","PL","NL","DK","BE","CZ","LU","FR","AT"],lg:["de"],lc:["de"]},DJ:{n:"Djibouti",on:"The Republic of Djibouti",e:"🇩🇯",eu:"U+1F1E9 U+1F1EF",i2:"DJ",i3:"DJI",in:"262",gi:223816,ci:"AF",p:740528,l:986,a:23e3,c:{a:11.8333,o:42.5},t:["Africa/Djibouti"],d:".dj",cc:"DJF",cn:"Franc",pc:"+253",ni:["ER","ET","SO"],lg:["fr","ar","so","aa"],lc:["fr-DJ","ar","so-DJ","aa"]},DK:{n:"Denmark",on:"The Kingdom of Denmark",e:"🇩🇰",eu:"U+1F1E9 U+1F1F0",i2:"DK",i3:"DNK",in:"208",gi:2623032,ci:"EU",p:5484e3,l:50,a:43094,c:{a:56,o:10},t:["Europe/Copenhagen"],d:".dk",cc:"DKK",cn:"Krone",pf:"####",pr:"^(\\d{4})$",pc:"+45",ni:["DE"],lg:["da","en","fo","de"],lc:["da-DK","en","fo","de-DK"]},DM:{n:"Dominica",on:"The Commonwealth of Dominica",e:"🇩🇲",eu:"U+1F1E9 U+1F1F2",i2:"DM",i3:"DMA",in:"212",gi:3575830,ci:"NA",p:72813,l:484,a:754,c:{a:15.5,o:-61.3333},t:["America/Dominica"],d:".dm",cc:"XCD",cn:"Dollar",pc:"+1-767",lg:["en"],lc:["en-DM"]},DO:{n:"Dominican Republic",on:"The Dominican Republic",e:"🇩🇴",eu:"U+1F1E9 U+1F1F4",i2:"DO",i3:"DOM",in:"214",gi:3508796,ci:"NA",p:9823821,l:1459,a:48730,c:{a:19,o:-70.6667},t:["America/Santo_Domingo"],d:".do",cc:"DOP",cn:"Peso",pf:"#####",pr:"^(\\d{5})$",pc:"+809",ni:["HT"],lg:["es"],lc:["es-DO"]},DZ:{n:"Algeria",on:"The People's Democratic Republic of Algeria",e:"🇩🇿",eu:"U+1F1E9 U+1F1FF",i2:"DZ",i3:"DZA",in:"012",gi:2589581,ci:"AF",p:34586184,l:494,a:2381740,c:{a:28,o:3},t:["Africa/Algiers"],d:".dz",cc:"DZD",cn:"Dinar",pf:"#####",pr:"^(\\d{5})$",pc:"+213",ni:["NE","EH","LY","MR","TN","MA","ML"],lg:["ar"],lc:["ar-DZ"]},EC:{n:"Ecuador",on:"The Republic of Ecuador",e:"🇪🇨",eu:"U+1F1EA U+1F1E8",i2:"EC",i3:"ECU",in:"218",gi:3658394,ci:"SA",p:14790608,l:3074,a:283560,c:{a:-1.25,o:-78.25},t:["America/Guayaquil","Pacific/Galapagos"],d:".ec",cc:"USD",cn:"Dollar",pf:"@####@",pr:"^([a-zA-Z]\\d{4}[a-zA-Z])$",pc:"+593",ni:["PE","CO"],lg:["es"],lc:["es-EC"]},EE:{n:"Estonia",on:"The Republic of Estonia",e:"🇪🇪",eu:"U+1F1EA U+1F1EA",i2:"EE",i3:"EST",in:"233",gi:453733,ci:"EU",p:1291170,l:99,a:45226,c:{a:59,o:26},t:["Europe/Tallinn"],d:".ee",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+372",ni:["RU","LV"],lg:["et","ru"],lc:["et","ru"]},EG:{n:"Egypt",on:"The Arab Republic of Egypt",e:"🇪🇬",eu:"U+1F1EA U+1F1EC",i2:"EG",i3:"EGY",in:"818",gi:357994,ci:"AF",p:80471869,l:199,a:1001450,c:{a:27,o:30},t:["Egypt","Africa/Cairo"],d:".eg",cc:"EGP",cn:"Pound",pf:"#####",pr:"^(\\d{5})$",pc:"+20",ni:["LY","SD","IL","PS"],lg:["ar","en","fr"],lc:["ar-EG","en","fr"]},EH:{n:"Western Sahara",on:"The Sahrawi Arab Democratic Republic",e:"🇪🇭",eu:"U+1F1EA U+1F1ED",i2:"EH",i3:"ESH",in:"732",gi:2461445,ci:"AF",p:567402,l:256,a:266e3,c:{a:24.2155,o:-12.8858},t:["Africa/El_Aaiun"],cc:"MAD",cn:"Dirham",pc:"+212",ni:["DZ","MR","MA"],lg:["ar"],lc:["ar"]},ER:{n:"Eritrea",on:"The State of Eritrea",e:"🇪🇷",eu:"U+1F1EA U+1F1F7",i2:"ER",i3:"ERI",in:"232",gi:338010,ci:"AF",p:5792984,l:1867,a:121320,c:{a:15,o:39},t:["Africa/Asmara"],d:".er",cc:"ERN",cn:"Nakfa",pc:"+291",ni:["ET","SD","DJ"],lg:["aa","ar","tig","kun","ti"],lc:["aa-ER","ar","tig","kun","ti-ER"]},ES:{n:"Spain",on:"The Kingdom of Spain",e:"🇪🇸",eu:"U+1F1EA U+1F1F8",i2:"ES",i3:"ESP",in:"724",gi:2510769,ci:"EU",p:46505963,l:511,a:504782,c:{a:40,o:-4},t:["Africa/Ceuta","Atlantic/Canary","Europe/Madrid"],d:".es",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+34",ni:["AD","PT","GI","FR","MA"],lg:["es","ca","gl","eu","oc"],lc:["es-ES","ca","gl","eu","oc"]},ET:{n:"Ethiopia",on:"The Federal Democratic Republic of Ethiopia",e:"🇪🇹",eu:"U+1F1EA U+1F1F9",i2:"ET",i3:"ETH",in:"231",gi:337996,ci:"AF",p:88013491,l:1721,a:1127127,c:{a:9,o:39.5},t:["Africa/Addis_Ababa"],d:".et",cc:"ETB",cn:"Birr",pf:"####",pr:"^(\\d{4})$",pc:"+251",ni:["ER","KE","SD","SS","SO","DJ"],lg:["am","en","om","ti","so","sid"],lc:["am","en-ET","om-ET","ti-ET","so-ET","sid"]},FI:{n:"Finland",on:"The Republic of Finland",e:"🇫🇮",eu:"U+1F1EB U+1F1EE",i2:"FI",i3:"FIN",in:"246",gi:660013,ci:"EU",p:5244e3,l:124,a:337030,c:{a:64,o:26},t:["Europe/Helsinki"],d:".fi",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(?:FI)*(\\d{5})$",pc:"+358",ni:["NO","RU","SE"],lg:["fi","sv","smn"],lc:["fi-FI","sv-FI","smn"]},FJ:{n:"Fiji",on:"The Republic of Fiji",e:"🇫🇯",eu:"U+1F1EB U+1F1EF",i2:"FJ",i3:"FJI",in:"242",gi:2205218,ci:"OC",p:875983,l:735,a:18270,c:{a:-18,o:178},t:["Pacific/Fiji"],d:".fj",cc:"FJD",cn:"Dollar",pc:"+679",lg:["en","fj"],lc:["en-FJ","fj"]},FK:{n:"Falkland Islands",on:"The Falkland Islands",e:"🇫🇰",eu:"U+1F1EB U+1F1F0",i2:"FK",i3:"FLK",in:"238",gi:3474414,ci:"SA",p:2638,l:17,a:12173,c:{a:-51.75,o:-59.1667},t:["Atlantic/Stanley"],d:".fk",cc:"FKP",cn:"Pound",pc:"+500",lg:["en"],lc:["en-FK"]},FM:{n:"Micronesia",on:"The Federated States of Micronesia",e:"🇫🇲",eu:"U+1F1EB U+1F1F2",i2:"FM",i3:"FSM",in:"583",gi:2081918,ci:"OC",p:107708,l:0,a:702,c:{a:6.924,o:158.162},t:["Pacific/Truk","Pacific/Yap","Pacific/Ponape","Pacific/Chuuk","Pacific/Kosrae","Pacific/Pohnpei"],d:".fm",cc:"USD",cn:"Dollar",pf:"#####",pr:"^(\\d{5})$",pc:"+691",lg:["en","chk","pon","yap","kos","uli","woe","nkr","kpg"],lc:["en-FM","chk","pon","yap","kos","uli","woe","nkr","kpg"]},FO:{n:"Faroe Islands",on:"The Faroe Islands",e:"🇫🇴",eu:"U+1F1EB U+1F1F4",i2:"FO",i3:"FRO",in:"234",gi:2622320,ci:"EU",p:48228,l:58,a:1399,c:{a:62,o:-7},t:["Atlantic/Faeroe","Atlantic/Faroe"],d:".fo",cc:"DKK",cn:"Krone",pf:"###",pr:"^(?:FO)*(\\d{3})$",pc:"+298",lg:["fo","da"],lc:["fo","da-FO"]},FR:{n:"France",on:"The French Republic",e:"🇫🇷",eu:"U+1F1EB U+1F1F7",i2:"FR",i3:"FRA",in:"250",gi:3017382,ci:"EU",p:64768389,l:543,a:547030,c:{a:46,o:2},t:["Europe/Paris"],d:".fr",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+33",ni:["CH","DE","BE","LU","IT","AD","MC","ES"],lg:["fr","frp","br","co","ca","eu","oc"],lc:["fr-FR","frp","br","co","ca","eu","oc"]},GA:{n:"Gabon",on:"The Gabonese Republic",e:"🇬🇦",eu:"U+1F1EC U+1F1E6",i2:"GA",i3:"GAB",in:"266",gi:2400553,ci:"AF",p:1545255,l:328,a:267667,c:{a:-1,o:11.75},t:["Africa/Libreville"],d:".ga",cc:"XAF",cn:"Franc",pc:"+241",ni:["CM","GQ","CG"],lg:["fr"],lc:["fr-GA"]},GB:{n:"United Kingdom",on:"The United Kingdom of Great Britain and Northern Ireland",e:"🇬🇧",eu:"U+1F1EC U+1F1E7",i2:"GB",i3:"GBR",in:"826",gi:2635167,ci:"EU",p:62348447,l:71,a:244820,c:{a:54.7584,o:-2.69531},t:["Europe/Belfast","GB","GB-Eire","Europe/London"],d:".gb",cc:"GBP",cn:"Pound",pf:"@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",pr:"^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$",pc:"+44",ni:["IE"],lg:["en","cy","gd"],lc:["en-GB","cy-GB","gd"]},GD:{n:"Grenada",on:"Grenada",e:"🇬🇩",eu:"U+1F1EC U+1F1E9",i2:"GD",i3:"GRD",in:"308",gi:3580239,ci:"NA",p:107818,l:261,a:344,c:{a:12.1167,o:-61.6667},t:["America/Grenada"],d:".gd",cc:"XCD",cn:"Dollar",pc:"+1-473",lg:["en"],lc:["en-GD"]},GE:{n:"Georgia",on:"Georgia",e:"🇬🇪",eu:"U+1F1EC U+1F1EA",i2:"GE",i3:"GEO",in:"268",gi:614540,ci:"AS",p:463e4,l:1021,a:69700,c:{a:42,o:43.4999},t:["Asia/Tbilisi"],d:".ge",cc:"GEL",cn:"Lari",pf:"####",pr:"^(\\d{4})$",pc:"+995",ni:["AM","AZ","TR","RU"],lg:["ka","ru","hy","az"],lc:["ka","ru","hy","az"]},GF:{n:"French Guiana",on:"Guyane",e:"🇬🇫",eu:"U+1F1EC U+1F1EB",i2:"GF",i3:"GUF",in:"254",gi:3381670,ci:"SA",p:195506,l:195,a:91e3,c:{a:4,o:-53},t:["America/Cayenne"],d:".gf",cc:"EUR",cn:"Euro",pf:"#####",pr:"^((97|98)3\\d{2})$",pc:"+594",ni:["SR","BR"],lg:["fr"],lc:["fr-GF"]},GG:{n:"Guernsey",on:"The Bailiwick of Guernsey",e:"🇬🇬",eu:"U+1F1EC U+1F1EC",i2:"GG",i3:"GGY",in:"831",gi:3042362,ci:"EU",p:65228,l:76,a:78,c:{a:49.4547,o:-2.57629},t:["Europe/Guernsey"],d:".gg",cc:"GBP",cn:"Pound",pf:"@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",pr:"^((?:(?:[A-PR-UWYZ][A-HK-Y]\\d[ABEHMNPRV-Y0-9]|[A-PR-UWYZ]\\d[A-HJKPS-UW0-9])\\s\\d[ABD-HJLNP-UW-Z]{2})|GIR\\s?0AA)$",pc:"+44-1481",lg:["en","nrf"],lc:["en","nrf"]},GH:{n:"Ghana",on:"The Republic of Ghana",e:"🇬🇭",eu:"U+1F1EC U+1F1ED",i2:"GH",i3:"GHA",in:"288",gi:2300660,ci:"AF",p:24339838,l:137,a:239460,c:{a:8.1,o:-1.2},t:["Africa/Accra"],d:".gh",cc:"GHS",cn:"Cedi",pc:"+233",ni:["CI","TG","BF"],lg:["en","ak","ee","tw"],lc:["en-GH","ak","ee","tw"]},GI:{n:"Gibraltar",on:"Gibraltar",e:"🇬🇮",eu:"U+1F1EC U+1F1EE",i2:"GI",i3:"GIB",in:"292",gi:2411586,ci:"EU",p:27884,l:82,a:6.5,c:{a:36.1333,o:-5.35},t:["Europe/Gibraltar"],d:".gi",cc:"GIP",cn:"Pound",pc:"+350",ni:["ES"],lg:["en","es","it","pt"],lc:["en-GI","es","it","pt"]},GL:{n:"Greenland",on:"Kalaallit Nunaat",e:"🇬🇱",eu:"U+1F1EC U+1F1F1",i2:"GL",i3:"GRL",in:"304",gi:3425505,ci:"NA",p:56375,l:3009,a:2166086,c:{a:72,o:-40},t:["America/Nuuk","America/Danmarkshavn","America/Godthab","America/Scoresbysund","America/Thule"],d:".gl",cc:"DKK",cn:"Krone",pf:"####",pr:"^(\\d{4})$",pc:"+299",lg:["kl","da","en"],lc:["kl","da-GL","en"]},GM:{n:"Gambia",on:"The Republic of The Gambia",e:"🇬🇲",eu:"U+1F1EC U+1F1F2",i2:"GM",i3:"GMB",in:"270",gi:2413451,ci:"AF",p:1593256,l:14,a:11300,c:{a:13.5,o:-15.5},t:["Africa/Banjul"],d:".gm",cc:"GMD",cn:"Dalasi",pc:"+220",ni:["SN"],lg:["en","mnk","wof","wo","ff"],lc:["en-GM","mnk","wof","wo","ff"]},GN:{n:"Guinea",on:"The Republic of Guinea",e:"🇬🇳",eu:"U+1F1EC U+1F1F3",i2:"GN",i3:"GIN",in:"324",gi:2420477,ci:"AF",p:10324025,l:428,a:245857,c:{a:10.8333,o:-10.6667},t:["Africa/Conakry"],d:".gn",cc:"GNF",cn:"Franc",pc:"+224",ni:["LR","SN","SL","CI","GW","ML"],lg:["fr"],lc:["fr-GN"]},GP:{n:"Guadeloupe",on:"Guadeloupe",e:"🇬🇵",eu:"U+1F1EC U+1F1F5",i2:"GP",i3:"GLP",in:"312",gi:3579143,ci:"NA",p:443e3,l:26,a:1780,c:{a:16.25,o:-61.5833},t:["America/Guadeloupe"],d:".gp",cc:"EUR",cn:"Euro",pf:"#####",pr:"^((97|98)\\d{3})$",pc:"+590",lg:["fr"],lc:["fr-GP"]},GQ:{n:"Equatorial Guinea",on:"The Republic of Equatorial Guinea",e:"🇬🇶",eu:"U+1F1EC U+1F1F6",i2:"GQ",i3:"GNQ",in:"226",gi:2309096,ci:"AF",p:1014999,l:741,a:28051,c:{a:1.7,o:10.5},t:["Africa/Malabo"],d:".gq",cc:"XAF",cn:"Franc",pc:"+240",ni:["GA","CM"],lg:["es","fr"],lc:["es-GQ","fr"]},GR:{n:"Greece",on:"The Hellenic Republic",e:"🇬🇷",eu:"U+1F1EC U+1F1F7",i2:"GR",i3:"GRC",in:"300",gi:390903,ci:"EU",p:11e6,l:644,a:131940,c:{a:39,o:22},t:["Europe/Athens"],d:".gr",cc:"EUR",cn:"Euro",pf:"### ##",pr:"^(\\d{5})$",pc:"+30",ni:["AL","MK","TR","BG"],lg:["el","en","fr"],lc:["el-GR","en","fr"]},GS:{n:"South Georgia and the South Sandwich Islands",on:"South Georgia and the South Sandwich Islands",e:"🇬🇸",eu:"U+1F1EC U+1F1F8",i2:"GS",i3:"SGS",in:"239",gi:3474415,ci:"AN",p:30,l:-9999,a:3903,c:{a:-56,o:-33},t:["Etc/GMT+2","Atlantic/South_Georgia"],d:".gs",cc:"GBP",cn:"Pound",lg:["en"],lc:["en"]},GT:{n:"Guatemala",on:"The Republic of Guatemala",e:"🇬🇹",eu:"U+1F1EC U+1F1F9",i2:"GT",i3:"GTM",in:"320",gi:3595528,ci:"NA",p:13550440,l:1376,a:108890,c:{a:15.5,o:-90.25},t:["America/Guatemala"],d:".gt",cc:"GTQ",cn:"Quetzal",pf:"#####",pr:"^(\\d{5})$",pc:"+502",ni:["MX","HN","BZ","SV"],lg:["es"],lc:["es-GT"]},GU:{n:"Guam",on:"The Territory of Guam",e:"🇬🇺",eu:"U+1F1EC U+1F1FA",i2:"GU",i3:"GUM",in:"316",gi:4043988,ci:"OC",p:159358,l:406,a:549,c:{a:13.4786,o:144.818},t:["Pacific/Guam"],d:".gu",cc:"USD",cn:"Dollar",pf:"969##",pr:"^(969\\d{2})$",pc:"+1-671",lg:["en","ch"],lc:["en-GU","ch-GU"]},GW:{n:"Guinea-Bissau",on:"The Republic of Guinea-Bissau",e:"🇬🇼",eu:"U+1F1EC U+1F1FC",i2:"GW",i3:"GNB",in:"624",gi:2372248,ci:"AF",p:1565126,l:29,a:36120,c:{a:12,o:-15},t:["Africa/Bissau"],d:".gw",cc:"XOF",cn:"Franc",pf:"####",pr:"^(\\d{4})$",pc:"+245",ni:["SN","GN"],lg:["pt","pov"],lc:["pt-GW","pov"]},GY:{n:"Guyana",on:"The Co-operative Republic of Guyana",e:"🇬🇾",eu:"U+1F1EC U+1F1FE",i2:"GY",i3:"GUY",in:"328",gi:3378535,ci:"SA",p:748486,l:157,a:214970,c:{a:5,o:-59},t:["America/Guyana"],d:".gy",cc:"GYD",cn:"Dollar",pc:"+592",ni:["SR","BR","VE"],lg:["en"],lc:["en-GY"]},HK:{n:"Hong Kong",on:"The Hong Kong Special Administrative Region of China",e:"🇭🇰",eu:"U+1F1ED U+1F1F0",i2:"HK",i3:"HKG",in:"344",gi:1819730,ci:"AS",p:6898686,l:46,a:1092,c:{a:22.25,o:114.167},t:["Hongkong","Asia/Hong_Kong"],d:".hk",cc:"HKD",cn:"Dollar",pc:"+852",lg:["zh","yue","en"],lc:["zh-HK","yue","zh","en"]},HM:{n:"Heard Island and McDonald Islands",on:"The Territory of Heard Island and McDonald Islands",e:"🇭🇲",eu:"U+1F1ED U+1F1F2",i2:"HM",i3:"HMD",in:"334",gi:1547314,ci:"AN",l:1634,a:412,c:{a:-53.1171,o:73.5095},d:".hm",cc:"AUD",cn:"Dollar",pc:"+"},HN:{n:"Honduras",on:"The Republic of Honduras",e:"🇭🇳",eu:"U+1F1ED U+1F1F3",i2:"HN",i3:"HND",in:"340",gi:3608932,ci:"NA",p:7989415,l:945,a:112090,c:{a:15,o:-86.5},t:["America/Tegucigalpa"],d:".hn",cc:"HNL",cn:"Lempira",pf:"@@####",pr:"^([A-Z]{2}\\d{4})$",pc:"+504",ni:["GT","NI","SV"],lg:["es","cab","miq"],lc:["es-HN","cab","miq"]},HR:{n:"Croatia",on:"The Republic of Croatia",e:"🇭🇷",eu:"U+1F1ED U+1F1F7",i2:"HR",i3:"HRV",in:"191",gi:3202326,ci:"EU",p:4284889,l:321,a:56542,c:{a:45.1667,o:15.5},t:["Europe/Zagreb"],d:".hr",cc:"HRK",cn:"Kuna",pf:"#####",pr:"^(?:HR)*(\\d{5})$",pc:"+385",ni:["HU","SI","BA","ME","RS"],lg:["hr","sr"],lc:["hr-HR","sr"]},HT:{n:"Haiti",on:"The Republic of Haiti",e:"🇭🇹",eu:"U+1F1ED U+1F1F9",i2:"HT",i3:"HTI",in:"332",gi:3723988,ci:"NA",p:9648924,l:1138,a:27750,c:{a:19.0758,o:-72.2962},t:["America/Port-au-Prince"],d:".ht",cc:"HTG",cn:"Gourde",pf:"HT####",pr:"^(?:HT)*(\\d{4})$",pc:"+509",ni:["DO"],lg:["ht","fr"],lc:["ht","fr-HT"]},HU:{n:"Hungary",on:"Hungary",e:"🇭🇺",eu:"U+1F1ED U+1F1FA",i2:"HU",i3:"HUN",in:"348",gi:719819,ci:"EU",p:9982e3,l:87,a:93030,c:{a:47,o:20},t:["Europe/Budapest"],d:".hu",cc:"HUF",cn:"Forint",pf:"####",pr:"^(\\d{4})$",pc:"+36",ni:["SK","SI","RO","UA","HR","AT","RS"],lg:["hu"],lc:["hu-HU"]},ID:{n:"Indonesia",on:"The Republic of Indonesia",e:"🇮🇩",eu:"U+1F1EE U+1F1E9",i2:"ID",i3:"IDN",in:"360",gi:1643084,ci:"AS",p:242968342,l:412,a:1919440,c:{a:-5,o:120},t:["Asia/Ujung_Pandang","Asia/Jakarta","Asia/Jayapura","Asia/Makassar","Asia/Pontianak"],d:".id",cc:"IDR",cn:"Rupiah",pf:"#####",pr:"^(\\d{5})$",pc:"+62",ni:["PG","TL","MY"],lg:["id","en","nl","jv"],lc:["id","en","nl","jv"]},IE:{n:"Ireland",on:"Ireland",e:"🇮🇪",eu:"U+1F1EE U+1F1EA",i2:"IE",i3:"IRL",in:"372",gi:2963597,ci:"EU",p:4622917,l:126,a:70280,c:{a:53,o:-8},t:["Eire","Europe/Dublin"],d:".ie",cc:"EUR",cn:"Euro",pf:"@@@ @@@@",pr:"^[A-Z]\\d{2}$|^[A-Z]{3}[A-Z]{4}$",pc:"+353",ni:["GB"],lg:["en","ga"],lc:["en-IE","ga-IE"]},IL:{n:"Israel",on:"The State of Israel",e:"🇮🇱",eu:"U+1F1EE U+1F1F1",i2:"IL",i3:"ISR",in:"376",gi:294640,ci:"AS",p:7353985,l:168,a:20770,c:{a:31.5,o:34.75},t:["Asia/Tel_Aviv","Israel","Asia/Jerusalem"],d:".il",cc:"ILS",cn:"Shekel",pf:"#######",pr:"^(\\d{7}|\\d{5})$",pc:"+972",ni:["SY","JO","LB","EG","PS"],lg:["he","ar","en"],lc:["he","ar-IL","en-IL"]},IM:{n:"Isle of Man",on:"The Isle of Man",e:"🇮🇲",eu:"U+1F1EE U+1F1F2",i2:"IM",i3:"IMN",in:"833",gi:3042225,ci:"EU",p:75049,l:356,a:572,c:{a:54.25,o:-4.5},t:["Europe/Isle_of_Man"],d:".im",cc:"GBP",cn:"Pound",pf:"@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",pr:"^((?:(?:[A-PR-UWYZ][A-HK-Y]\\d[ABEHMNPRV-Y0-9]|[A-PR-UWYZ]\\d[A-HJKPS-UW0-9])\\s\\d[ABD-HJLNP-UW-Z]{2})|GIR\\s?0AA)$",pc:"+44-1624",lg:["en","gv"],lc:["en","gv"]},IN:{n:"India",on:"The Republic of India",e:"🇮🇳",eu:"U+1F1EE U+1F1F3",i2:"IN",i3:"IND",in:"356",gi:1269750,ci:"AS",p:1173108018,l:686,a:3287590,c:{a:22,o:79},t:["Asia/Calcutta","Asia/Kolkata"],d:".in",cc:"INR",cn:"Rupee",pf:"######",pr:"^(\\d{6})$",pc:"+91",ni:["CN","NP","MM","BT","PK","BD"],lg:["en","hi","bn","te","mr","ta","ur","gu","kn","ml","or","pa","as","bh","sat","ks","ne","sd","kok","doi","mni","sit","sa","fr","lus","inc"],lc:["en-IN","hi","bn","te","mr","ta","ur","gu","kn","ml","or","pa","as","bh","sat","ks","ne","sd","kok","doi","mni","sit","sa","fr","lus","inc"]},IO:{n:"British Indian Ocean Territory",on:"The British Indian Ocean Territory",e:"🇮🇴",eu:"U+1F1EE U+1F1F4",i2:"IO",i3:"IOT",in:"086",gi:1282588,ci:"AS",p:4e3,l:-9999,a:60,c:{a:-6,o:72},t:["Indian/Chagos"],d:".io",cc:"USD",cn:"Dollar",pc:"+246",lg:["en"],lc:["en-IO"]},IQ:{n:"Iraq",on:"The Republic of Iraq",e:"🇮🇶",eu:"U+1F1EE U+1F1F6",i2:"IQ",i3:"IRQ",in:"368",gi:99237,ci:"AS",p:29671605,l:44,a:437072,c:{a:33,o:44},t:["Asia/Baghdad"],d:".iq",cc:"IQD",cn:"Dinar",pf:"#####",pr:"^(\\d{5})$",pc:"+964",ni:["SY","SA","IR","JO","TR","KW"],lg:["ar","ku","hy"],lc:["ar-IQ","ku","hy"]},IR:{n:"Iran",on:"The Islamic Republic of Iran",e:"🇮🇷",eu:"U+1F1EE U+1F1F7",i2:"IR",i3:"IRN",in:"364",gi:130758,ci:"AS",p:76923300,l:1511,a:1648e3,c:{a:32,o:53},t:["Iran","Asia/Tehran"],d:".ir",cc:"IRR",cn:"Rial",pf:"##########",pr:"^(\\d{10})$",pc:"+98",ni:["TM","AF","IQ","AM","PK","AZ","TR"],lg:["fa","ku"],lc:["fa-IR","ku"]},IS:{n:"Iceland",on:"Iceland",e:"🇮🇸",eu:"U+1F1EE U+1F1F8",i2:"IS",i3:"ISL",in:"352",gi:2629691,ci:"EU",p:308910,l:859,a:103e3,c:{a:65,o:-18},t:["Iceland","Atlantic/Reykjavik"],d:".is",cc:"ISK",cn:"Krona",pf:"###",pr:"^(\\d{3})$",pc:"+354",lg:["is","en","de","da","sv","no"],lc:["is","en","de","da","sv","no"]},IT:{n:"Italy",on:"The Italian Republic",e:"🇮🇹",eu:"U+1F1EE U+1F1F9",i2:"IT",i3:"ITA",in:"380",gi:3175395,ci:"EU",p:60340328,l:673,a:301230,c:{a:42.8333,o:12.8333},t:["Europe/Rome"],d:".it",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+39",ni:["CH","VA","SI","SM","FR","AT"],lg:["it","de","fr","sc","ca","co","sl"],lc:["it-IT","de-IT","fr-IT","sc","ca","co","sl"]},JE:{n:"Jersey",on:"The Bailiwick of Jersey",e:"🇯🇪",eu:"U+1F1EF U+1F1EA",i2:"JE",i3:"JEY",in:"832",gi:3042142,ci:"EU",p:90812,l:96,a:116,c:{a:49.2167,o:-2.11667},t:["Europe/Jersey"],d:".je",cc:"GBP",cn:"Pound",pf:"@# #@@|@## #@@|@@# #@@|@@## #@@|@#@ #@@|@@#@ #@@|GIR0AA",pr:"^((?:(?:[A-PR-UWYZ][A-HK-Y]\\d[ABEHMNPRV-Y0-9]|[A-PR-UWYZ]\\d[A-HJKPS-UW0-9])\\s\\d[ABD-HJLNP-UW-Z]{2})|GIR\\s?0AA)$",pc:"+44-1534",lg:["en","fr","nrf"],lc:["en","fr","nrf"]},JM:{n:"Jamaica",on:"Jamaica",e:"🇯🇲",eu:"U+1F1EF U+1F1F2",i2:"JM",i3:"JAM",in:"388",gi:3489940,ci:"NA",p:2847232,l:556,a:10991,c:{a:18.1667,o:-77.25},t:["Jamaica","America/Jamaica"],d:".jm",cc:"JMD",cn:"Dollar",pc:"+1-876",lg:["en"],lc:["en-JM"]},JO:{n:"Jordan",on:"The Hashemite Kingdom of Jordan",e:"🇯🇴",eu:"U+1F1EF U+1F1F4",i2:"JO",i3:"JOR",in:"400",gi:248816,ci:"AS",p:6407085,l:860,a:92300,c:{a:31,o:36},t:["Asia/Amman"],d:".jo",cc:"JOD",cn:"Dinar",pf:"#####",pr:"^(\\d{5})$",pc:"+962",ni:["SY","SA","IQ","IL","PS"],lg:["ar","en"],lc:["ar-JO","en"]},JP:{n:"Japan",on:"Japan",e:"🇯🇵",eu:"U+1F1EF U+1F1F5",i2:"JP",i3:"JPN",in:"392",gi:1861060,ci:"AS",p:127288e3,l:19,a:377835,c:{a:35.6854,o:139.753},t:["Japan","Asia/Tokyo"],d:".jp",cc:"JPY",cn:"Yen",pf:"###-####",pr:"^\\d{3}-\\d{4}$",pc:"+81",lg:["ja"],lc:["ja"]},KE:{n:"Kenya",on:"The Republic of Kenya",e:"🇰🇪",eu:"U+1F1F0 U+1F1EA",i2:"KE",i3:"KEN",in:"404",gi:192950,ci:"AF",p:40046566,l:697,a:582650,c:{a:1,o:38},t:["Africa/Asmera","Africa/Nairobi"],d:".ke",cc:"KES",cn:"Shilling",pf:"#####",pr:"^(\\d{5})$",pc:"+254",ni:["ET","TZ","SS","SO","UG"],lg:["en","sw"],lc:["en-KE","sw-KE"]},KG:{n:"Kyrgyzstan",on:"The Kyrgyz Republic",e:"🇰🇬",eu:"U+1F1F0 U+1F1EC",i2:"KG",i3:"KGZ",in:"417",gi:1527747,ci:"AS",p:5776500,l:1850,a:198500,c:{a:41.5,o:75},t:["Asia/Bishkek"],d:".kg",cc:"KGS",cn:"Som",pf:"######",pr:"^(\\d{6})$",pc:"+996",ni:["CN","TJ","UZ","KZ"],lg:["ky","uz","ru"],lc:["ky","uz","ru"]},KH:{n:"Cambodia",on:"The Kingdom of Cambodia",e:"🇰🇭",eu:"U+1F1F0 U+1F1ED",i2:"KH",i3:"KHM",in:"116",gi:1831722,ci:"AS",p:14453680,l:37,a:181040,c:{a:13,o:105},t:["Asia/Phnom_Penh"],d:".kh",cc:"KHR",cn:"Riels",pf:"#####",pr:"^(\\d{5})$",pc:"+855",ni:["LA","TH","VN"],lg:["km","fr","en"],lc:["km","fr","en"]},KI:{n:"Kiribati",on:"The Republic of Kiribati",e:"🇰🇮",eu:"U+1F1F0 U+1F1EE",i2:"KI",i3:"KIR",in:"296",gi:4030945,ci:"OC",p:92533,l:-9999,a:811,c:{a:1.421,o:172.984},t:["Etc/GMT-12","Pacific/Tarawa","Pacific/Enderbury","Pacific/Kiritimati"],d:".ki",cc:"AUD",cn:"Dollar",pc:"+686",lg:["en","gil"],lc:["en-KI","gil"]},KM:{n:"Comoros",on:"The Union of the Comoros",e:"🇰🇲",eu:"U+1F1F0 U+1F1F2",i2:"KM",i3:"COM",in:"174",gi:921929,ci:"AF",p:773407,l:1136,a:2170,c:{a:-12.2333,o:44.4455},t:["Indian/Comoro"],d:".km",cc:"KMF",cn:"Franc",pc:"+269",lg:["ar","fr"],lc:["ar","fr-KM"]},KN:{n:"Saint Kitts and Nevis",on:"Saint Kitts and Nevis",e:"🇰🇳",eu:"U+1F1F0 U+1F1F3",i2:"KN",i3:"KNA",in:"659",gi:3575174,ci:"NA",p:51134,l:480,a:261,c:{a:17.3333,o:-62.75},t:["America/St_Kitts"],d:".kn",cc:"XCD",cn:"Dollar",pc:"+1-869",lg:["en"],lc:["en-KN"]},KP:{n:"North Korea",on:"The Democratic People's Republic of Korea",e:"🇰🇵",eu:"U+1F1F0 U+1F1F5",i2:"KP",i3:"PRK",in:"408",gi:1873107,ci:"AS",p:22912177,l:1018,a:120540,c:{a:40,o:127},t:["Asia/Pyongyang"],d:".kp",cc:"KPW",cn:"Won",pf:"###-###",pr:"^(\\d{6})$",pc:"+850",ni:["CN","KR","RU"],lg:["ko"],lc:["ko-KP"]},KR:{n:"South Korea",on:"The Republic of Korea",e:"🇰🇷",eu:"U+1F1F0 U+1F1F7",i2:"KR",i3:"KOR",in:"410",gi:1835841,ci:"AS",p:48422644,l:184,a:98480,c:{a:36.5,o:127.75},t:["ROK","Asia/Seoul"],d:".kr",cc:"KRW",cn:"Won",pf:"#####",pr:"^(\\d{5})$",pc:"+82",ni:["KP"],lg:["ko","en"],lc:["ko-KR","en"]},KW:{n:"Kuwait",on:"The State of Kuwait",e:"🇰🇼",eu:"U+1F1F0 U+1F1FC",i2:"KW",i3:"KWT",in:"414",gi:285570,ci:"AS",p:2789132,l:79,a:17820,c:{a:29.5,o:47.75},t:["Asia/Kuwait"],d:".kw",cc:"KWD",cn:"Dinar",pf:"#####",pr:"^(\\d{5})$",pc:"+965",ni:["SA","IQ"],lg:["ar","en"],lc:["ar-KW","en"]},KY:{n:"Cayman Islands",on:"The Cayman Islands",e:"🇰🇾",eu:"U+1F1F0 U+1F1FE",i2:"KY",i3:"CYM",in:"136",gi:3580718,ci:"NA",p:44270,l:-9999,a:262,c:{a:19.5,o:-80.6667},t:["America/Cayman"],d:".ky",cc:"KYD",cn:"Dollar",pc:"+1-345",lg:["en"],lc:["en-KY"]},KZ:{n:"Kazakhstan",on:"The Republic of Kazakhstan",e:"🇰🇿",eu:"U+1F1F0 U+1F1FF",i2:"KZ",i3:"KAZ",in:"398",gi:1522867,ci:"AS",p:1534e4,l:381,a:2717300,c:{a:48,o:68},t:["Asia/Almaty","Asia/Aqtau","Asia/Aqtobe","Asia/Atyrau","Asia/Oral","Asia/Qostanay","Asia/Qyzylorda"],d:".kz",cc:"KZT",cn:"Tenge",pf:"######",pr:"^(\\d{6})$",pc:"+7",ni:["TM","CN","KG","UZ","RU"],lg:["kk","ru"],lc:["kk","ru"]},LA:{n:"Laos",on:"The Lao People's Democratic Republic",e:"🇱🇦",eu:"U+1F1F1 U+1F1E6",i2:"LA",i3:"LAO",in:"418",gi:1655842,ci:"AS",p:6368162,l:702,a:236800,c:{a:18,o:105},t:["Asia/Vientiane"],d:".la",cc:"LAK",cn:"Kip",pf:"#####",pr:"^(\\d{5})$",pc:"+856",ni:["CN","MM","KH","TH","VN"],lg:["lo","fr","en"],lc:["lo","fr","en"]},LB:{n:"Lebanon",on:"The Lebanese Republic",e:"🇱🇧",eu:"U+1F1F1 U+1F1E7",i2:"LB",i3:"LBN",in:"422",gi:272103,ci:"AS",p:4125247,l:1210,a:10400,c:{a:33.8333,o:35.8333},t:["Asia/Beirut"],d:".lb",cc:"LBP",cn:"Pound",pf:"#### ####|####",pr:"^(\\d{4}(\\d{4})?)$",pc:"+961",ni:["SY","IL"],lg:["ar","fr","en","hy"],lc:["ar-LB","fr-LB","en","hy"]},LC:{n:"Saint Lucia",on:"Saint Lucia",e:"🇱🇨",eu:"U+1F1F1 U+1F1E8",i2:"LC",i3:"LCA",in:"662",gi:3576468,ci:"NA",p:160922,l:330,a:616,c:{a:13.8833,o:-60.9667},t:["America/St_Lucia"],d:".lc",cc:"XCD",cn:"Dollar",pc:"+1-758",lg:["en"],lc:["en-LC"]},LI:{n:"Liechtenstein",on:"The Principality of Liechtenstein",e:"🇱🇮",eu:"U+1F1F1 U+1F1EE",i2:"LI",i3:"LIE",in:"438",gi:3042058,ci:"EU",p:35e3,l:730,a:160,c:{a:47.1667,o:9.53333},t:["Europe/Vaduz"],d:".li",cc:"CHF",cn:"Franc",pf:"####",pr:"^(\\d{4})$",pc:"+423",ni:["CH","AT"],lg:["de"],lc:["de-LI"]},LK:{n:"Sri Lanka",on:"The Democratic Socialist Republic of Sri Lanka",e:"🇱🇰",eu:"U+1F1F1 U+1F1F0",i2:"LK",i3:"LKA",in:"144",gi:1227603,ci:"AS",p:21513990,l:394,a:65610,c:{a:7.75,o:80.75},t:["Asia/Colombo"],d:".lk",cc:"LKR",cn:"Rupee",pf:"#####",pr:"^(\\d{5})$",pc:"+94",lg:["si","ta","en"],lc:["si","ta","en"]},LR:{n:"Liberia",on:"The Republic of Liberia",e:"🇱🇷",eu:"U+1F1F1 U+1F1F7",i2:"LR",i3:"LBR",in:"430",gi:2275384,ci:"AF",p:3685076,l:203,a:111370,c:{a:6.5,o:-9.5},t:["Africa/Monrovia"],d:".lr",cc:"LRD",cn:"Dollar",pf:"####",pr:"^(\\d{4})$",pc:"+231",ni:["SL","CI","GN"],lg:["en"],lc:["en-LR"]},LS:{n:"Lesotho",on:"The Kingdom of Lesotho",e:"🇱🇸",eu:"U+1F1F1 U+1F1F8",i2:"LS",i3:"LSO",in:"426",gi:932692,ci:"AF",p:1919552,l:2468,a:30355,c:{a:-29.5,o:28.25},t:["Africa/Maseru"],d:".ls",cc:"LSL",cn:"Loti",pf:"###",pr:"^(\\d{3})$",pc:"+266",ni:["ZA"],lg:["en","st","zu","xh"],lc:["en-LS","st","zu","xh"]},LT:{n:"Lithuania",on:"The Republic of Lithuania",e:"🇱🇹",eu:"U+1F1F1 U+1F1F9",i2:"LT",i3:"LTU",in:"440",gi:597427,ci:"EU",p:2944459,l:51,a:65200,c:{a:55.4167,o:24},t:["Europe/Vilnius"],d:".lt",cc:"EUR",cn:"Euro",pf:"LT-#####",pr:"^(?:LT)*(\\d{5})$",pc:"+370",ni:["PL","BY","RU","LV"],lg:["lt","ru","pl"],lc:["lt","ru","pl"]},LU:{n:"Luxembourg",on:"The Grand Duchy of Luxembourg",e:"🇱🇺",eu:"U+1F1F1 U+1F1FA",i2:"LU",i3:"LUX",in:"442",gi:2960313,ci:"EU",p:497538,l:406,a:2586,c:{a:49.75,o:6.16667},t:["Europe/Luxembourg"],d:".lu",cc:"EUR",cn:"Euro",pf:"L-####",pr:"^(?:L-)?\\d{4}$",pc:"+352",ni:["DE","BE","FR"],lg:["lb","de","fr"],lc:["lb","de-LU","fr-LU"]},LV:{n:"Latvia",on:"The Republic of Latvia",e:"🇱🇻",eu:"U+1F1F1 U+1F1FB",i2:"LV",i3:"LVA",in:"428",gi:458258,ci:"EU",p:2217969,l:105,a:64589,c:{a:57,o:25},t:["Europe/Riga"],d:".lv",cc:"EUR",cn:"Euro",pf:"LV-####",pr:"^(?:LV)*(\\d{4})$",pc:"+371",ni:["LT","EE","BY","RU"],lg:["lv","ru","lt"],lc:["lv","ru","lt"]},LY:{n:"Libya",on:"The State of Libya",e:"🇱🇾",eu:"U+1F1F1 U+1F1FE",i2:"LY",i3:"LBY",in:"434",gi:2215636,ci:"AF",p:6461454,l:512,a:1759540,c:{a:28,o:17},t:["Libya","Africa/Tripoli"],d:".ly",cc:"LYD",cn:"Dinar",pc:"+218",ni:["TD","NE","DZ","SD","TN","EG"],lg:["ar","it","en"],lc:["ar-LY","it","en"]},MA:{n:"Morocco",on:"The Kingdom of Morocco",e:"🇲🇦",eu:"U+1F1F2 U+1F1E6",i2:"MA",i3:"MAR",in:"504",gi:2542007,ci:"AF",p:33848242,l:2710,a:446550,c:{a:32,o:-6},t:["Africa/Casablanca"],d:".ma",cc:"MAD",cn:"Dirham",pf:"#####",pr:"^(\\d{5})$",pc:"+212",ni:["DZ","EH","ES"],lg:["ar","ber","fr"],lc:["ar-MA","ber","fr"]},MC:{n:"Monaco",on:"The Principality of Monaco",e:"🇲🇨",eu:"U+1F1F2 U+1F1E8",i2:"MC",i3:"MCO",in:"492",gi:2993457,ci:"EU",p:32965,l:43,a:1.95,c:{a:43.7314,o:7.41903},t:["Europe/Monaco"],d:".mc",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+377",ni:["FR"],lg:["fr","en","it"],lc:["fr-MC","en","it"]},MD:{n:"Moldova",on:"The Republic of Moldova",e:"🇲🇩",eu:"U+1F1F2 U+1F1E9",i2:"MD",i3:"MDA",in:"498",gi:617790,ci:"EU",p:4324e3,l:172,a:33843,c:{a:47.25,o:28.5833},t:["Europe/Tiraspol","Europe/Chisinau"],d:".md",cc:"MDL",cn:"Leu",pf:"MD-####",pr:"^MD-\\d{4}$",pc:"+373",ni:["RO","UA"],lg:["ro","ru","gag","tr"],lc:["ro","ru","gag","tr"]},ME:{n:"Montenegro",on:"Montenegro",e:"🇲🇪",eu:"U+1F1F2 U+1F1EA",i2:"ME",i3:"MNE",in:"499",gi:3194884,ci:"EU",p:666730,l:1678,a:14026,c:{a:42.75,o:19.25},t:["Europe/Podgorica"],d:".me",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+382",ni:["AL","HR","BA","RS","XK"],lg:["sr","hu","bs","sq","hr","rom"],lc:["sr","hu","bs","sq","hr","rom"]},MF:{n:"Saint Martin",on:"The Collectivity of Saint-Martin",e:"🇲🇫",eu:"U+1F1F2 U+1F1EB",i2:"MF",i3:"MAF",in:"663",gi:3578421,ci:"NA",p:35925,l:95,a:53,c:{a:18.0667,o:-63.0667},t:["America/Marigot"],d:".mf",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+590",ni:["SX"],lg:["fr"],lc:["fr"]},MG:{n:"Madagascar",on:"The Republic of Madagascar",e:"🇲🇬",eu:"U+1F1F2 U+1F1EC",i2:"MG",i3:"MDG",in:"450",gi:1062947,ci:"AF",p:21281844,l:1678,a:587040,c:{a:-20,o:47},t:["Indian/Antananarivo"],d:".mg",cc:"MGA",cn:"Ariary",pf:"###",pr:"^(\\d{3})$",pc:"+261",lg:["fr","mg"],lc:["fr-MG","mg"]},MH:{n:"Marshall Islands",on:"The Republic of the Marshall Islands",e:"🇲🇭",eu:"U+1F1F2 U+1F1ED",i2:"MH",i3:"MHL",in:"584",gi:2080185,ci:"OC",p:65859,l:10,a:181.3,c:{a:7.113,o:171.236},t:["Kwajalein","Pacific/Kwajalein","Pacific/Majuro"],d:".mh",cc:"USD",cn:"Dollar",pf:"#####-####",pr:"^969\\d{2}(-\\d{4})$",pc:"+692",lg:["mh","en"],lc:["mh","en-MH"]},MK:{n:"North Macedonia",on:"Republic of North Macedonia",e:"🇲🇰",eu:"U+1F1F2 U+1F1F0",i2:"MK",i3:"MKD",in:"807",gi:718075,ci:"EU",p:2062294,l:209,a:25333,c:{a:41.6667,o:21.75},t:["Europe/Skopje"],d:".mk",cc:"MKD",cn:"Denar",pf:"####",pr:"^(\\d{4})$",pc:"+389",ni:["AL","GR","BG","RS","XK"],lg:["mk","sq","tr","rmm","sr"],lc:["mk","sq","tr","rmm","sr"]},ML:{n:"Mali",on:"The Republic of Mali",e:"🇲🇱",eu:"U+1F1F2 U+1F1F1",i2:"ML",i3:"MLI",in:"466",gi:2453866,ci:"AF",p:13796354,l:297,a:124e4,c:{a:18,o:-2},t:["Africa/Bamako"],d:".ml",cc:"XOF",cn:"Franc",pc:"+223",ni:["SN","NE","DZ","CI","GN","MR","BF"],lg:["fr","bm"],lc:["fr-ML","bm"]},MM:{n:"Myanmar",on:"The Republic of the Union of Myanmar",e:"🇲🇲",eu:"U+1F1F2 U+1F1F2",i2:"MM",i3:"MMR",in:"104",gi:1327865,ci:"AS",p:53414374,l:165,a:678500,c:{a:21,o:96},t:["Asia/Yangon","Asia/Rangoon"],d:".mm",cc:"MMK",cn:"Kyat",pf:"#####",pr:"^(\\d{5})$",pc:"+95",ni:["CN","LA","TH","BD","IN"],lg:["my"],lc:["my"]},MN:{n:"Mongolia",on:"The State of Mongolia",e:"🇲🇳",eu:"U+1F1F2 U+1F1F3",i2:"MN",i3:"MNG",in:"496",gi:2029969,ci:"AS",p:3086918,l:1387,a:1565e3,c:{a:46,o:105},t:["Asia/Ulan_Bator","Asia/Choibalsan","Asia/Hovd","Asia/Ulaanbaatar"],d:".mn",cc:"MNT",cn:"Tugrik",pf:"######",pr:"^(\\d{6})$",pc:"+976",ni:["CN","RU"],lg:["mn","ru"],lc:["mn","ru"]},MO:{n:"Macao",on:"Macao Special Administrative Region of China",e:"🇲🇴",eu:"U+1F1F2 U+1F1F4",i2:"MO",i3:"MAC",in:"446",gi:1821275,ci:"AS",p:449198,l:6,a:254,c:{a:22.1578,o:113.56},t:["Asia/Macao","Asia/Macau"],d:".mo",cc:"MOP",cn:"Pataca",pc:"+853",lg:["zh","pt"],lc:["zh","zh-MO","pt"]},MP:{n:"Northern Mariana Islands",on:"The Commonwealth of the Northern Mariana Islands",e:"🇲🇵",eu:"U+1F1F2 U+1F1F5",i2:"MP",i3:"MNP",in:"580",gi:4041468,ci:"OC",p:53883,l:979,a:477,c:{a:15.214,o:145.756},t:["Pacific/Saipan"],d:".mp",cc:"USD",cn:"Dollar",pf:"#####",pr:"^9695\\d{1}$",pc:"+1-670",lg:["fil","tl","zh","ch","en"],lc:["fil","tl","zh","ch-MP","en-MP"]},MQ:{n:"Martinique",on:"Martinique",e:"🇲🇶",eu:"U+1F1F2 U+1F1F6",i2:"MQ",i3:"MTQ",in:"474",gi:3570311,ci:"NA",p:432900,l:79,a:1100,c:{a:14.6667,o:-61},t:["America/Martinique"],d:".mq",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+596",lg:["fr"],lc:["fr-MQ"]},MR:{n:"Mauritania",on:"The Islamic Republic of Mauritania",e:"🇲🇷",eu:"U+1F1F2 U+1F1F7",i2:"MR",i3:"MRT",in:"478",gi:2378080,ci:"AF",p:3205060,l:388,a:1030700,c:{a:20.25,o:-10.5},t:["Africa/Nouakchott"],d:".mr",cc:"MRO",cn:"Ouguiya",pc:"+222",ni:["SN","DZ","EH","ML"],lg:["ar","fuc","snk","fr","mey","wo"],lc:["ar-MR","fuc","snk","fr","mey","wo"]},MS:{n:"Montserrat",on:"Montserrat",e:"🇲🇸",eu:"U+1F1F2 U+1F1F8",i2:"MS",i3:"MSR",in:"500",gi:3578097,ci:"NA",p:9341,l:369,a:102,c:{a:16.75,o:-62.2},t:["America/Montserrat"],d:".ms",cc:"XCD",cn:"Dollar",pc:"+1-664",lg:["en"],lc:["en-MS"]},MT:{n:"Malta",on:"The Republic of Malta",e:"🇲🇹",eu:"U+1F1F2 U+1F1F9",i2:"MT",i3:"MLT",in:"470",gi:2562770,ci:"EU",p:403e3,l:96,a:316,c:{a:35.9167,o:14.4333},t:["Europe/Malta"],d:".mt",cc:"EUR",cn:"Euro",pf:"@@@ ####",pr:"^[A-Z]{3}\\s?\\d{4}$",pc:"+356",lg:["mt","en"],lc:["mt","en-MT"]},MU:{n:"Mauritius",on:"The Republic of Mauritius",e:"🇲🇺",eu:"U+1F1F2 U+1F1FA",i2:"MU",i3:"MUS",in:"480",gi:934292,ci:"AF",p:1294104,l:432,a:2040,c:{a:-20.3,o:57.5833},t:["Indian/Mauritius"],d:".mu",cc:"MUR",cn:"Rupee",pc:"+230",lg:["en","bho","fr"],lc:["en-MU","bho","fr"]},MV:{n:"Maldives",on:"The Republic of Maldives",e:"🇲🇻",eu:"U+1F1F2 U+1F1FB",i2:"MV",i3:"MDV",in:"462",gi:1282028,ci:"AS",p:395650,l:-9999,a:300,c:{a:3.2,o:73},t:["Indian/Maldives"],d:".mv",cc:"MVR",cn:"Rufiyaa",pf:"#####",pr:"^(\\d{5})$",pc:"+960",lg:["dv","en"],lc:["dv","en"]},MW:{n:"Malawi",on:"The Republic of Malawi",e:"🇲🇼",eu:"U+1F1F2 U+1F1FC",i2:"MW",i3:"MWI",in:"454",gi:927384,ci:"AF",p:15447500,l:1180,a:118480,c:{a:-13.5,o:34},t:["Africa/Blantyre"],d:".mw",cc:"MWK",cn:"Kwacha",pc:"+265",ni:["TZ","MZ","ZM"],lg:["ny","yao","tum","swk"],lc:["ny","yao","tum","swk"]},MX:{n:"Mexico",on:"The United Mexican States",e:"🇲🇽",eu:"U+1F1F2 U+1F1FD",i2:"MX",i3:"MEX",in:"484",gi:3996063,ci:"NA",p:112468855,l:2062,a:1972550,c:{a:23,o:-102},t:["Mexico/BajaSur","Mexico/General","America/Ensenada","America/Santa_Isabel","Mexico/BajaNorte","America/Bahia_Banderas","America/Cancun","America/Chihuahua","America/Tijuana","America/Hermosillo","America/Matamoros","America/Mazatlan","America/Merida","America/Mexico_City","America/Monterrey","America/Ojinaga"],d:".mx",cc:"MXN",cn:"Peso",pf:"#####",pr:"^(\\d{5})$",pc:"+52",ni:["GT","US","BZ"],lg:["es"],lc:["es-MX"]},MY:{n:"Malaysia",on:"Malaysia",e:"🇲🇾",eu:"U+1F1F2 U+1F1FE",i2:"MY",i3:"MYS",in:"458",gi:1733045,ci:"AS",p:28274729,l:275,a:329750,c:{a:2.5,o:112.5},t:["Singapore","Asia/Kuala_Lumpur","Asia/Kuching"],d:".my",cc:"MYR",cn:"Ringgit",pf:"#####",pr:"^(\\d{5})$",pc:"+60",ni:["BN","TH","ID"],lg:["ms","en","zh","ta","te","ml","pa","th"],lc:["ms-MY","en","zh","ta","te","ml","pa","th"]},MZ:{n:"Mozambique",on:"The Republic of Mozambique",e:"🇲🇿",eu:"U+1F1F2 U+1F1FF",i2:"MZ",i3:"MOZ",in:"508",gi:1036973,ci:"AF",p:22061451,l:138,a:801590,c:{a:-18.25,o:35},t:["Africa/Maputo"],d:".mz",cc:"MZN",cn:"Metical",pf:"####",pr:"^(\\d{4})$",pc:"+258",ni:["ZW","TZ","SZ","ZA","ZM","MW"],lg:["pt","vmw"],lc:["pt-MZ","vmw"]},NA:{n:"Namibia",on:"The Republic of Namibia",e:"🇳🇦",eu:"U+1F1F3 U+1F1E6",i2:"NA",i3:"NAM",in:"516",gi:3355338,ci:"AF",p:2128471,l:1381,a:825418,c:{a:-22,o:17},t:["Africa/Windhoek"],d:".na",cc:"NAD",cn:"Dollar",pc:"+264",ni:["ZA","BW","ZM","AO"],lg:["en","af","de","hz","naq"],lc:["en-NA","af","de","hz","naq"]},NC:{n:"New Caledonia",on:"New Caledonia",e:"🇳🇨",eu:"U+1F1F3 U+1F1E8",i2:"NC",i3:"NCL",in:"540",gi:2139685,ci:"OC",p:216494,l:87,a:19060,c:{a:-21.5,o:165.5},t:["Pacific/Noumea"],d:".nc",cc:"XPF",cn:"Franc",pf:"#####",pr:"^(\\d{5})$",pc:"+687",lg:["fr"],lc:["fr-NC"]},NE:{n:"Niger",on:"The Republic of the Niger",e:"🇳🇪",eu:"U+1F1F3 U+1F1EA",i2:"NE",i3:"NER",in:"562",gi:2440476,ci:"AF",p:15878271,l:1030,a:1267e3,c:{a:18,o:9},t:["Africa/Niamey"],d:".ne",cc:"XOF",cn:"Franc",pf:"####",pr:"^(\\d{4})$",pc:"+227",ni:["TD","BJ","DZ","LY","BF","NG","ML"],lg:["fr","ha","kr","dje"],lc:["fr-NE","ha","kr","dje"]},NF:{n:"Norfolk Island",on:"The Territory of Norfolk Island",e:"🇳🇫",eu:"U+1F1F3 U+1F1EB",i2:"NF",i3:"NFK",in:"574",gi:2155115,ci:"OC",p:1828,l:115,a:34.6,c:{a:-29.0333,o:167.95},t:["Pacific/Norfolk"],d:".nf",cc:"AUD",cn:"Dollar",pf:"####",pr:"^(\\d{4})$",pc:"+672",lg:["en"],lc:["en-NF"]},NG:{n:"Nigeria",on:"The Federal Republic of Nigeria",e:"🇳🇬",eu:"U+1F1F3 U+1F1EC",i2:"NG",i3:"NGA",in:"566",gi:2328926,ci:"AF",p:154e6,l:779,a:923768,c:{a:10,o:8},t:["Africa/Lagos"],d:".ng",cc:"NGN",cn:"Naira",pf:"######",pr:"^(\\d{6})$",pc:"+234",ni:["TD","NE","BJ","CM"],lg:["en","ha","yo","ig","ff"],lc:["en-NG","ha","yo","ig","ff"]},NI:{n:"Nicaragua",on:"The Republic of Nicaragua",e:"🇳🇮",eu:"U+1F1F3 U+1F1EE",i2:"NI",i3:"NIC",in:"558",gi:3617476,ci:"NA",p:5995928,l:130,a:129494,c:{a:13,o:-85},t:["America/Managua"],d:".ni",cc:"NIO",cn:"Cordoba",pf:"###-###-#",pr:"^(\\d{7})$",pc:"+505",ni:["CR","HN"],lg:["es","en"],lc:["es-NI","en"]},NL:{n:"Netherlands",on:"The Kingdom of the Netherlands",e:"🇳🇱",eu:"U+1F1F3 U+1F1F1",i2:"NL",i3:"NLD",in:"528",gi:2750405,ci:"EU",p:16645e3,l:24,a:41526,c:{a:52.25,o:5.75},t:["Europe/Amsterdam"],d:".nl",cc:"EUR",cn:"Euro",pf:"#### @@",pr:"^(\\d{4}[A-Z]{2})$",pc:"+31",ni:["DE","BE"],lg:["nl","fy"],lc:["nl-NL","fy-NL"]},NO:{n:"Norway",on:"The Kingdom of Norway",e:"🇳🇴",eu:"U+1F1F3 U+1F1F4",i2:"NO",i3:"NOR",in:"578",gi:3144096,ci:"EU",p:5009150,l:740,a:324220,c:{a:62,o:10},t:["Atlantic/Jan_Mayen","Europe/Oslo"],d:".no",cc:"NOK",cn:"Krone",pf:"####",pr:"^(\\d{4})$",pc:"+47",ni:["FI","RU","SE"],lg:["no","nb","nn","se","fi"],lc:["no","nb","nn","se","fi"]},NP:{n:"Nepal",on:"The Federal Democratic Republic of Nepal",e:"🇳🇵",eu:"U+1F1F3 U+1F1F5",i2:"NP",i3:"NPL",in:"524",gi:1282988,ci:"AS",p:28951852,l:1041,a:140800,c:{a:28,o:84},t:["Asia/Katmandu","Asia/Kathmandu"],d:".np",cc:"NPR",cn:"Rupee",pf:"#####",pr:"^(\\d{5})$",pc:"+977",ni:["CN","IN"],lg:["ne","en"],lc:["ne","en"]},NR:{n:"Nauru",on:"The Republic of Nauru",e:"🇳🇷",eu:"U+1F1F3 U+1F1F7",i2:"NR",i3:"NRU",in:"520",gi:2110425,ci:"OC",p:10065,l:71,a:21,c:{a:-.517,o:166.933},t:["Pacific/Nauru"],d:".nr",cc:"AUD",cn:"Dollar",pc:"+674",lg:["na","en"],lc:["na","en-NR"]},NU:{n:"Niue",on:"Niue",e:"🇳🇺",eu:"U+1F1F3 U+1F1FA",i2:"NU",i3:"NIU",in:"570",gi:4036232,ci:"OC",p:2166,l:65,a:260,c:{a:-19.0333,o:-169.867},t:["Pacific/Niue"],d:".nu",cc:"NZD",cn:"Dollar",pc:"+683",lg:["niu","en"],lc:["niu","en-NU"]},NZ:{n:"New Zealand",on:"New Zealand",e:"🇳🇿",eu:"U+1F1F3 U+1F1FF",i2:"NZ",i3:"NZL",in:"554",gi:2186224,ci:"OC",p:4252277,l:21,a:268680,c:{a:-42,o:174},t:["Antarctica/South_Pole","NZ","NZ-CHAT","Pacific/Auckland","Pacific/Chatham"],d:".nz",cc:"NZD",cn:"Dollar",pf:"####",pr:"^(\\d{4})$",pc:"+64",lg:["en","mi"],lc:["en-NZ","mi"]},OM:{n:"Oman",on:"The Sultanate of Oman",e:"🇴🇲",eu:"U+1F1F4 U+1F1F2",i2:"OM",i3:"OMN",in:"512",gi:286963,ci:"AS",p:2967717,l:129,a:212460,c:{a:21,o:57},t:["Asia/Muscat"],d:".om",cc:"OMR",cn:"Rial",pf:"###",pr:"^(\\d{3})$",pc:"+968",ni:["SA","YE","AE"],lg:["ar","en","bal","ur"],lc:["ar-OM","en","bal","ur"]},PA:{n:"Panama",on:"The Republic of Panamá",e:"🇵🇦",eu:"U+1F1F5 U+1F1E6",i2:"PA",i3:"PAN",in:"591",gi:3703430,ci:"NA",p:3410676,l:60,a:78200,c:{a:9,o:-80},t:["America/Panama"],d:".pa",cc:"PAB",cn:"Balboa",pc:"+507",ni:["CR","CO"],lg:["es","en"],lc:["es-PA","en"]},PE:{n:"Peru",on:"The Republic of Perú",e:"🇵🇪",eu:"U+1F1F5 U+1F1EA",i2:"PE",i3:"PER",in:"604",gi:3932488,ci:"SA",p:29907003,l:306,a:1285220,c:{a:-10,o:-75.25},t:["America/Lima"],d:".pe",cc:"PEN",cn:"Sol",pc:"+51",ni:["EC","CL","BO","BR","CO"],lg:["es","qu","ay"],lc:["es-PE","qu","ay"]},PF:{n:"French Polynesia",on:"French Polynesia",e:"🇵🇫",eu:"U+1F1F5 U+1F1EB",i2:"PF",i3:"PYF",in:"258",gi:4030656,ci:"OC",p:270485,l:-9999,a:4167,c:{a:-15,o:-140},t:["Pacific/Gambier","Pacific/Marquesas","Pacific/Tahiti"],d:".pf",cc:"XPF",cn:"Franc",pf:"#####",pr:"^((97|98)7\\d{2})$",pc:"+689",lg:["fr","ty"],lc:["fr-PF","ty"]},PG:{n:"Papua New Guinea",on:"The Independent State of Papua New Guinea",e:"🇵🇬",eu:"U+1F1F5 U+1F1EC",i2:"PG",i3:"PNG",in:"598",gi:2088628,ci:"OC",p:6064515,l:1209,a:462840,c:{a:-6,o:147},t:["Etc/GMT-10","Pacific/Port_Moresby","Pacific/Bougainville"],d:".pg",cc:"PGK",cn:"Kina",pf:"###",pr:"^(\\d{3})$",pc:"+675",ni:["ID"],lg:["en","ho","meu","tpi"],lc:["en-PG","ho","meu","tpi"]},PH:{n:"Philippines",on:"The Republic of the Philippines",e:"🇵🇭",eu:"U+1F1F5 U+1F1ED",i2:"PH",i3:"PHL",in:"608",gi:1694008,ci:"AS",p:99900177,l:-9999,a:3e5,c:{a:13,o:122},t:["Asia/Manila"],d:".ph",cc:"PHP",cn:"Peso",pf:"####",pr:"^(\\d{4})$",pc:"+63",lg:["tl","en","fil","ceb","tgl","ilo","hil","war","pam","bik","bcl","pag","mrw","tsg","mdh","cbk","krj","sgd","msb","akl","ibg","yka","mta","abx"],lc:["tl","en-PH","fil","ceb","tgl","ilo","hil","war","pam","bik","bcl","pag","mrw","tsg","mdh","cbk","krj","sgd","msb","akl","ibg","yka","mta","abx"]},PK:{n:"Pakistan",on:"The Islamic Republic of Pakistan",e:"🇵🇰",eu:"U+1F1F5 U+1F1F0",i2:"PK",i3:"PAK",in:"586",gi:1168579,ci:"AS",p:184404791,l:1721,a:803940,c:{a:30,o:70},t:["Asia/Karachi"],d:".pk",cc:"PKR",cn:"Rupee",pf:"#####",pr:"^(\\d{5})$",pc:"+92",ni:["CN","AF","IR","IN"],lg:["ur","en","pa","sd","ps","brh"],lc:["ur-PK","en-PK","pa","sd","ps","brh"]},PL:{n:"Poland",on:"The Republic of Poland",e:"🇵🇱",eu:"U+1F1F5 U+1F1F1",i2:"PL",i3:"POL",in:"616",gi:798544,ci:"EU",p:385e5,l:110,a:312685,c:{a:52,o:20},t:["Poland","Europe/Warsaw"],d:".pl",cc:"PLN",cn:"Zloty",pf:"##-###",pr:"^\\d{2}-\\d{3}$",pc:"+48",ni:["DE","LT","SK","CZ","BY","UA","RU"],lg:["pl"],lc:["pl"]},PM:{n:"Saint Pierre and Miquelon",on:"The Overseas Collectivity of Saint-Pierre and Miquelon",e:"🇵🇲",eu:"U+1F1F5 U+1F1F2",i2:"PM",i3:"SPM",in:"666",gi:3424932,ci:"NA",p:7012,l:155,a:242,c:{a:46.8333,o:-56.3333},t:["America/Miquelon"],d:".pm",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(97500)$",pc:"+508",lg:["fr"],lc:["fr-PM"]},PN:{n:"Pitcairn",on:"The Pitcairn",e:"🇵🇳",eu:"U+1F1F5 U+1F1F3",i2:"PN",i3:"PCN",in:"612",gi:4030699,ci:"OC",p:46,l:92,a:47,c:{a:-25.0667,o:-130.1},t:["Pacific/Pitcairn"],d:".pn",cc:"NZD",cn:"Dollar",pc:"+870",lg:["en"],lc:["en-PN"]},PR:{n:"Puerto Rico",on:"The Commonwealth of Puerto Rico",e:"🇵🇷",eu:"U+1F1F5 U+1F1F7",i2:"PR",i3:"PRI",in:"630",gi:4566966,ci:"NA",p:3916632,l:454,a:9104,c:{a:18.2483,o:-66.4999},t:["America/Puerto_Rico"],d:".pr",cc:"USD",cn:"Dollar",pf:"#####-####",pr:"^00[679]\\d{2}(?:-\\d{4})?$",pc:"+1",lg:["en","es"],lc:["en-PR","es-PR"]},PS:{n:"Palestine",on:"The State of Palestine",e:"🇵🇸",eu:"U+1F1F5 U+1F1F8",i2:"PS",i3:"PSE",in:"275",gi:6254930,ci:"AS",p:38e5,l:868,a:5970,c:{a:31.9216,o:35.2033},t:["Asia/Gaza","Asia/Hebron"],d:".ps",cc:"ILS",cn:"Shekel",pc:"+970",ni:["JO","IL","EG"],lg:["ar"],lc:["ar-PS"]},PT:{n:"Portugal",on:"The Portuguese Republic",e:"🇵🇹",eu:"U+1F1F5 U+1F1F9",i2:"PT",i3:"PRT",in:"620",gi:2264397,ci:"EU",p:10676e3,l:571,a:92391,c:{a:39.6945,o:-8.13057},t:["Portugal","Atlantic/Azores","Atlantic/Madeira","Europe/Lisbon"],d:".pt",cc:"EUR",cn:"Euro",pf:"####-###",pr:"^\\d{4}-\\d{3}\\s?[a-zA-Z]{0,25}$",pc:"+351",ni:["ES"],lg:["pt","mwl"],lc:["pt-PT","mwl"]},PW:{n:"Palau",on:"The Republic of Palau",e:"🇵🇼",eu:"U+1F1F5 U+1F1FC",i2:"PW",i3:"PLW",in:"585",gi:1559582,ci:"OC",p:19907,l:242,a:458,c:{a:7.503,o:134.621},t:["Etc/GMT-9","Pacific/Palau"],d:".pw",cc:"USD",cn:"Dollar",pf:"96940",pr:"^(96940)$",pc:"+680",lg:["pau","sov","en","tox","ja","fil","zh"],lc:["pau","sov","en-PW","tox","ja","fil","zh"]},PY:{n:"Paraguay",on:"The Republic of Paraguay",e:"🇵🇾",eu:"U+1F1F5 U+1F1FE",i2:"PY",i3:"PRY",in:"600",gi:3437598,ci:"SA",p:6375830,l:83,a:406750,c:{a:-23.3333,o:-58},t:["America/Asuncion"],d:".py",cc:"PYG",cn:"Guarani",pf:"####",pr:"^(\\d{4})$",pc:"+595",ni:["BO","BR","AR"],lg:["es","gn"],lc:["es-PY","gn"]},QA:{n:"Qatar",on:"The State of Qatar",e:"🇶🇦",eu:"U+1F1F6 U+1F1E6",i2:"QA",i3:"QAT",in:"634",gi:289688,ci:"AS",p:840926,l:27,a:11437,c:{a:25.5,o:51.25},t:["Asia/Qatar"],d:".qa",cc:"QAR",cn:"Rial",pc:"+974",ni:["SA"],lg:["ar","es"],lc:["ar-QA","es"]},RE:{n:"Réunion",on:"Réunion",e:"🇷🇪",eu:"U+1F1F7 U+1F1EA",i2:"RE",i3:"REU",in:"638",gi:935317,ci:"AF",p:776948,l:1071,a:2517,c:{a:-21.1,o:55.6},t:["Indian/Reunion"],d:".re",cc:"EUR",cn:"Euro",pf:"#####",pr:"^((97|98)(4|7|8)\\d{2})$",pc:"+262",lg:["fr"],lc:["fr-RE"]},RO:{n:"Romania",on:"Romania",e:"🇷🇴",eu:"U+1F1F7 U+1F1F4",i2:"RO",i3:"ROU",in:"642",gi:798549,ci:"EU",p:21959278,l:576,a:237500,c:{a:46,o:25},t:["Europe/Bucharest"],d:".ro",cc:"RON",cn:"Leu",pf:"######",pr:"^(\\d{6})$",pc:"+40",ni:["MD","HU","UA","BG","RS"],lg:["ro","hu","rom"],lc:["ro","hu","rom"]},RS:{n:"Serbia",on:"The Republic of Serbia",e:"🇷🇸",eu:"U+1F1F7 U+1F1F8",i2:"RS",i3:"SRB",in:"688",gi:6290252,ci:"EU",p:7344847,l:117,a:88361,c:{a:44.8189,o:20.46},t:["Europe/Belgrade"],d:".rs",cc:"RSD",cn:"Dinar",pf:"######",pr:"^(\\d{6})$",pc:"+381",ni:["AL","HU","MK","RO","HR","BA","BG","ME","XK"],lg:["sr","hu","bs","rom"],lc:["sr","hu","bs","rom"]},RU:{n:"Russia",on:"The Russian Federation",e:"🇷🇺",eu:"U+1F1F7 U+1F1FA",i2:"RU",i3:"RUS",in:"643",gi:2017370,ci:"EU",p:140702e3,l:307,a:171e5,c:{a:60,o:100},t:["W-SU","Asia/Anadyr","Asia/Barnaul","Asia/Chita","Asia/Irkutsk","Asia/Kamchatka","Asia/Khandyga","Asia/Krasnoyarsk","Asia/Magadan","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Sakhalin","Asia/Srednekolymsk","Asia/Tomsk","Asia/Ust-Nera","Asia/Vladivostok","Asia/Yakutsk","Asia/Yekaterinburg","Europe/Astrakhan","Europe/Kaliningrad","Europe/Kirov","Europe/Moscow","Europe/Samara","Europe/Saratov","Europe/Ulyanovsk","Europe/Volgograd"],d:".ru",cc:"RUB",cn:"Ruble",pf:"######",pr:"^(\\d{6})$",pc:"+7",ni:["GE","CN","BY","UA","KZ","LV","PL","EE","LT","FI","MN","NO","AZ","KP"],lg:["ru","tt","xal","cau","ady","kv","ce","tyv","cv","udm","tut","mns","bua","myv","mdf","chm","ba","inh","kbd","krc","av","sah","nog"],lc:["ru","tt","xal","cau","ady","kv","ce","tyv","cv","udm","tut","mns","bua","myv","mdf","chm","ba","inh","tut","kbd","krc","av","sah","nog"]},RW:{n:"Rwanda",on:"The Republic of Rwanda",e:"🇷🇼",eu:"U+1F1F7 U+1F1FC",i2:"RW",i3:"RWA",in:"646",gi:49518,ci:"AF",p:11055976,l:1354,a:26338,c:{a:-2,o:30},t:["Africa/Kigali"],d:".rw",cc:"RWF",cn:"Franc",pc:"+250",ni:["TZ","CD","BI","UG"],lg:["rw","en","fr","sw"],lc:["rw","en-RW","fr-RW","sw"]},SA:{n:"Saudi Arabia",on:"The Kingdom of Saudi Arabia",e:"🇸🇦",eu:"U+1F1F8 U+1F1E6",i2:"SA",i3:"SAU",in:"682",gi:102358,ci:"AS",p:25731776,l:790,a:1960582,c:{a:25,o:45},t:["Asia/Riyadh"],d:".sa",cc:"SAR",cn:"Rial",pf:"#####",pr:"^(\\d{5})$",pc:"+966",ni:["QA","OM","IQ","YE","JO","AE","KW"],lg:["ar"],lc:["ar-SA"]},SB:{n:"Solomon Islands",on:"The Solomon Islands",e:"🇸🇧",eu:"U+1F1F8 U+1F1E7",i2:"SB",i3:"SLB",in:"090",gi:2103350,ci:"OC",p:559198,l:231,a:28450,c:{a:-8,o:159},t:["Pacific/Guadalcanal"],d:".sb",cc:"SBD",cn:"Dollar",pc:"+677",lg:["en","tpi"],lc:["en-SB","tpi"]},SC:{n:"Seychelles",on:"The Republic of Seychelles",e:"🇸🇨",eu:"U+1F1F8 U+1F1E8",i2:"SC",i3:"SYC",in:"690",gi:241170,ci:"AF",p:88340,l:-9999,a:455,c:{a:-4.58333,o:55.6667},t:["Indian/Mahe"],d:".sc",cc:"SCR",cn:"Rupee",pc:"+248",lg:["en","fr"],lc:["en-SC","fr-SC"]},SD:{n:"Sudan",on:"The Republic of the Sudan",e:"🇸🇩",eu:"U+1F1F8 U+1F1E9",i2:"SD",i3:"SDN",in:"729",gi:366755,ci:"AF",p:35e6,l:424,a:1861484,c:{a:16,o:30},t:["Africa/Khartoum"],d:".sd",cc:"SDG",cn:"Pound",pf:"#####",pr:"^(\\d{5})$",pc:"+249",ni:["SS","TD","EG","ET","ER","LY","CF"],lg:["ar","en","fia"],lc:["ar-SD","en","fia"]},SE:{n:"Sweden",on:"The Kingdom of Sweden",e:"🇸🇪",eu:"U+1F1F8 U+1F1EA",i2:"SE",i3:"SWE",in:"752",gi:2661886,ci:"EU",p:9828655,l:359,a:449964,c:{a:62,o:15},t:["Europe/Stockholm"],d:".se",cc:"SEK",cn:"Krona",pf:"### ##",pr:"^(?:SE)?\\d{3}\\s\\d{2}$",pc:"+46",ni:["NO","FI"],lg:["sv","se","sma","fi"],lc:["sv-SE","se","sma","fi-SE"]},SG:{n:"Singapore",on:"The Republic of Singapore",e:"🇸🇬",eu:"U+1F1F8 U+1F1EC",i2:"SG",i3:"SGP",in:"702",gi:1880251,ci:"AS",p:4701069,l:42,a:692.7,c:{a:1.36667,o:103.8},t:["Asia/Singapore"],d:".sg",cc:"SGD",cn:"Dollar",pf:"######",pr:"^(\\d{6})$",pc:"+65",lg:["cmn","en","ms","ta","zh"],lc:["cmn","en-SG","ms-SG","ta-SG","zh-SG"]},SH:{n:"Saint Helena, Ascension and Tristan da Cunha",on:"Saint Helena, Ascension and Tristan da Cunha",e:"🇸🇭",eu:"U+1F1F8 U+1F1ED",i2:"SH",i3:"SHN",in:"654",gi:3370751,ci:"AF",p:7460,l:572,a:410,c:{a:-15.95,o:-5.7},t:["Atlantic/St_Helena"],d:".sh",cc:"SHP",cn:"Pound",pf:"STHL 1ZZ",pr:"^(STHL1ZZ)$",pc:"+290",lg:["en"],lc:["en-SH"]},SI:{n:"Slovenia",on:"The Republic of Slovenia",e:"🇸🇮",eu:"U+1F1F8 U+1F1EE",i2:"SI",i3:"SVN",in:"705",gi:3190538,ci:"EU",p:2007e3,l:696,a:20273,c:{a:46.0833,o:15},t:["Europe/Ljubljana"],d:".si",cc:"EUR",cn:"Euro",pf:"####",pr:"^(?:SI)*(\\d{4})$",pc:"+386",ni:["HU","IT","HR","AT"],lg:["sl","sh"],lc:["sl","sh"]},SJ:{n:"Svalbard and Jan Mayen",on:"Svalbard and Jan Mayen",e:"🇸🇯",eu:"U+1F1F8 U+1F1EF",i2:"SJ",i3:"SJM",in:"744",gi:607072,ci:"EU",p:2550,l:169,a:62049,c:{a:77.5536,o:23.6703},t:["Arctic/Longyearbyen"],cc:"NOK",cn:"Krone",pf:"####",pr:"^(d{4})$",pc:"+47",lg:["no","ru"],lc:["no","ru"]},SK:{n:"Slovakia",on:"The Slovak Republic",e:"🇸🇰",eu:"U+1F1F8 U+1F1F0",i2:"SK",i3:"SVK",in:"703",gi:3057568,ci:"EU",p:5455e3,l:1183,a:48845,c:{a:48.6667,o:19.5},t:["Europe/Bratislava"],d:".sk",cc:"EUR",cn:"Euro",pf:"### ##",pr:"^\\d{3}\\s?\\d{2}$",pc:"+421",ni:["PL","HU","CZ","UA","AT"],lg:["sk","hu"],lc:["sk","hu"]},SL:{n:"Sierra Leone",on:"The Republic of Sierra Leone",e:"🇸🇱",eu:"U+1F1F8 U+1F1F1",i2:"SL",i3:"SLE",in:"694",gi:2403846,ci:"AF",p:5245695,l:361,a:71740,c:{a:8.5,o:-11.5},t:["Africa/Freetown"],d:".sl",cc:"SLL",cn:"Leone",pc:"+232",ni:["LR","GN"],lg:["en","men","tem"],lc:["en-SL","men","tem"]},SM:{n:"San Marino",on:"The Republic of San Marino",e:"🇸🇲",eu:"U+1F1F8 U+1F1F2",i2:"SM",i3:"SMR",in:"674",gi:3168068,ci:"EU",p:31477,l:683,a:61.2,c:{a:43.9367,o:12.4463},t:["Europe/San_Marino"],d:".sm",cc:"EUR",cn:"Euro",pf:"4789#",pr:"^(4789\\d)$",pc:"+378",ni:["IT"],lg:["it"],lc:["it-SM"]},SN:{n:"Senegal",on:"The Republic of Senegal",e:"🇸🇳",eu:"U+1F1F8 U+1F1F3",i2:"SN",i3:"SEN",in:"686",gi:2245662,ci:"AF",p:12323252,l:53,a:196190,c:{a:14.5,o:-14.25},t:["Africa/Dakar"],d:".sn",cc:"XOF",cn:"Franc",pf:"#####",pr:"^(\\d{5})$",pc:"+221",ni:["GN","MR","GW","GM","ML"],lg:["fr","wo","fuc","mnk"],lc:["fr-SN","wo","fuc","mnk"]},SO:{n:"Somalia",on:"The Federal Republic of Somalia",e:"🇸🇴",eu:"U+1F1F8 U+1F1F4",i2:"SO",i3:"SOM",in:"706",gi:51537,ci:"AF",p:10112453,l:118,a:637657,c:{a:6,o:48},t:["Africa/Mogadishu"],d:".so",cc:"SOS",cn:"Shilling",pf:"@@  #####",pr:"^([A-Z]{2}\\d{5})$",pc:"+252",ni:["ET","KE","DJ"],lg:["so","ar","it","en"],lc:["so-SO","ar-SO","it","en-SO"]},SR:{n:"Suriname",on:"The Republic of Suriname",e:"🇸🇷",eu:"U+1F1F8 U+1F1F7",i2:"SR",i3:"SUR",in:"740",gi:3382998,ci:"SA",p:492829,l:171,a:163270,c:{a:4,o:-56},t:["America/Paramaribo"],d:".sr",cc:"SRD",cn:"Dollar",pc:"+597",ni:["GY","BR","GF"],lg:["nl","en","srn","hns","jv"],lc:["nl-SR","en","srn","hns","jv"]},SS:{n:"South Sudan",on:"The Republic of South Sudan",e:"🇸🇸",eu:"U+1F1F8 U+1F1F8",i2:"SS",i3:"SSD",in:"728",gi:7909807,ci:"AF",p:8260490,l:406,a:644329,c:{a:7.5,o:30},t:["Africa/Juba"],d:".ss",cc:"SSP",cn:"Pound",pc:"+211",ni:["CD","CF","ET","KE","SD","UG"],lg:["en"],lc:["en"]},ST:{n:"Sao Tome and Principe",on:"The Democratic Republic of São Tomé and Príncipe",e:"🇸🇹",eu:"U+1F1F8 U+1F1F9",i2:"ST",i3:"STP",in:"678",gi:2410758,ci:"AF",p:197700,l:-9999,a:1001,c:{a:1,o:7},t:["Africa/Sao_Tome"],d:".st",cc:"STD",cn:"Dobra",pc:"+239",lg:["pt"],lc:["pt-ST"]},SV:{n:"El Salvador",on:"The Republic of El Salvador",e:"🇸🇻",eu:"U+1F1F8 U+1F1FB",i2:"SV",i3:"SLV",in:"222",gi:3585968,ci:"NA",p:6052064,l:694,a:21040,c:{a:13.8333,o:-88.9167},t:["America/El_Salvador"],d:".sv",cc:"USD",cn:"Dollar",pf:"CP ####",pr:"^(?:CP)*(\\d{4})$",pc:"+503",ni:["GT","HN"],lg:["es"],lc:["es-SV"]},SX:{n:"Sint Maarten",on:"Sint Maarten",e:"🇸🇽",eu:"U+1F1F8 U+1F1FD",i2:"SX",i3:"SXM",in:"534",gi:7609695,ci:"NA",p:37429,l:48,a:21,c:{a:18.0417,o:-63.0667},t:["America/Lower_Princes"],d:".sx",cc:"ANG",cn:"Guilder",pc:"+599",ni:["MF"],lg:["nl","en"],lc:["nl","en"]},SY:{n:"Syria",on:"The Syrian Arab Republic",e:"🇸🇾",eu:"U+1F1F8 U+1F1FE",i2:"SY",i3:"SYR",in:"760",gi:163843,ci:"AS",p:22198110,l:918,a:185180,c:{a:35,o:38},t:["Asia/Damascus"],d:".sy",cc:"SYP",cn:"Pound",pc:"+963",ni:["IQ","JO","IL","TR","LB"],lg:["ar","ku","hy","arc","fr","en"],lc:["ar-SY","ku","hy","arc","fr","en"]},SZ:{n:"Eswatini",on:"The Kingdom of Eswatini",e:"🇸🇿",eu:"U+1F1F8 U+1F1FF",i2:"SZ",i3:"SWZ",in:"748",gi:934841,ci:"AF",p:1354051,l:538,a:17363,c:{a:-26.5,o:31.5},t:["Africa/Mbabane"],d:".sz",cc:"SZL",cn:"Lilangeni",pf:"@###",pr:"^([A-Z]\\d{3})$",pc:"+268",ni:["ZA","MZ"],lg:["en","ss"],lc:["en-SZ","ss-SZ"]},TC:{n:"Turks and Caicos Islands",on:"The Turks and Caicos Islands",e:"🇹🇨",eu:"U+1F1F9 U+1F1E8",i2:"TC",i3:"TCA",in:"796",gi:3576916,ci:"NA",p:20556,l:5,a:430,c:{a:21.7333,o:-71.5833},t:["America/Grand_Turk"],d:".tc",cc:"USD",cn:"Dollar",pf:"TKCA 1ZZ",pr:"^(TKCA 1ZZ)$",pc:"+1-649",lg:["en"],lc:["en-TC"]},TD:{n:"Chad",on:"The Republic of Chad",e:"🇹🇩",eu:"U+1F1F9 U+1F1E9",i2:"TD",i3:"TCD",in:"148",gi:2434508,ci:"AF",p:10543464,l:340,a:1284e3,c:{a:15,o:19},t:["Africa/Ndjamena"],d:".td",cc:"XAF",cn:"Franc",pc:"+235",ni:["NE","LY","CF","SD","CM","NG"],lg:["fr","ar","sre"],lc:["fr-TD","ar-TD","sre"]},TF:{n:"French Southern Territories",on:"The French Southern and Antarctic Lands",e:"🇹🇫",eu:"U+1F1F9 U+1F1EB",i2:"TF",i3:"ATF",in:"260",gi:1546748,ci:"AN",p:140,l:-9999,a:7829,c:{a:-43,o:67},t:["Indian/Kerguelen"],d:".tf",cc:"EUR",cn:"Euro",lg:["fr"],lc:["fr"]},TG:{n:"Togo",on:"The Togolese Republic",e:"🇹🇬",eu:"U+1F1F9 U+1F1EC",i2:"TG",i3:"TGO",in:"768",gi:2363686,ci:"AF",p:6587239,l:325,a:56785,c:{a:8.66667,o:1.08333},t:["Africa/Lome"],d:".tg",cc:"XOF",cn:"Franc",pc:"+228",ni:["BJ","GH","BF"],lg:["fr","ee","hna","kbp","dag","ha"],lc:["fr-TG","ee","hna","kbp","dag","ha"]},TH:{n:"Thailand",on:"The Kingdom of Thailand",e:"🇹🇭",eu:"U+1F1F9 U+1F1ED",i2:"TH",i3:"THA",in:"764",gi:1605651,ci:"AS",p:67089500,l:120,a:514e3,c:{a:15.5,o:101},t:["Asia/Bangkok"],d:".th",cc:"THB",cn:"Baht",pf:"#####",pr:"^(\\d{5})$",pc:"+66",ni:["LA","MM","KH","MY"],lg:["th","en"],lc:["th","en"]},TJ:{n:"Tajikistan",on:"The Republic of Tajikistan",e:"🇹🇯",eu:"U+1F1F9 U+1F1EF",i2:"TJ",i3:"TJK",in:"762",gi:1220409,ci:"AS",p:7487489,l:3461,a:143100,c:{a:39,o:71},t:["Asia/Dushanbe"],d:".tj",cc:"TJS",cn:"Somoni",pf:"######",pr:"^(\\d{6})$",pc:"+992",ni:["CN","AF","KG","UZ"],lg:["tg","ru"],lc:["tg","ru"]},TK:{n:"Tokelau",on:"Tokelau",e:"🇹🇰",eu:"U+1F1F9 U+1F1F0",i2:"TK",i3:"TKL",in:"772",gi:4031074,ci:"OC",p:1466,l:-9999,a:10,c:{a:-9.167,o:-171.83},t:["Pacific/Fakaofo"],d:".tk",cc:"NZD",cn:"Dollar",pc:"+690",lg:["tkl","en"],lc:["tkl","en-TK"]},TL:{n:"Timor-Leste",on:"The Democratic Republic of Timor-Leste",e:"🇹🇱",eu:"U+1F1F9 U+1F1F1",i2:"TL",i3:"TLS",in:"626",gi:1966436,ci:"OC",p:1154625,l:1419,a:15007,c:{a:-8.83333,o:125.75},t:["Asia/Dili"],d:".tl",cc:"USD",cn:"Dollar",pc:"+670",ni:["ID"],lg:["tet","pt","id","en"],lc:["tet","pt-TL","id","en"]},TM:{n:"Turkmenistan",on:"Turkmenistan",e:"🇹🇲",eu:"U+1F1F9 U+1F1F2",i2:"TM",i3:"TKM",in:"795",gi:1218197,ci:"AS",p:4940916,l:148,a:488100,c:{a:39.75,o:59.6667},t:["Asia/Ashkhabad","Asia/Ashgabat"],d:".tm",cc:"TMT",cn:"Manat",pf:"######",pr:"^(\\d{6})$",pc:"+993",ni:["AF","IR","UZ","KZ"],lg:["tk","ru","uz"],lc:["tk","ru","uz"]},TN:{n:"Tunisia",on:"The Republic of Tunisia",e:"🇹🇳",eu:"U+1F1F9 U+1F1F3",i2:"TN",i3:"TUN",in:"788",gi:2464461,ci:"AF",p:10589025,l:24,a:163610,c:{a:34,o:9},t:["Africa/Tunis"],d:".tn",cc:"TND",cn:"Dinar",pf:"####",pr:"^(\\d{4})$",pc:"+216",ni:["DZ","LY"],lg:["ar","fr"],lc:["ar-TN","fr"]},TO:{n:"Tonga",on:"The Kingdom of Tonga",e:"🇹🇴",eu:"U+1F1F9 U+1F1F4",i2:"TO",i3:"TON",in:"776",gi:4032283,ci:"OC",p:122580,l:-9999,a:748,c:{a:-20,o:-175},t:["Pacific/Tongatapu"],d:".to",cc:"TOP",cn:"Pa'anga",pc:"+676",lg:["to","en"],lc:["to","en-TO"]},TR:{n:"Turkey",on:"The Republic of Turkey",e:"🇹🇷",eu:"U+1F1F9 U+1F1F7",i2:"TR",i3:"TUR",in:"792",gi:298795,ci:"AS",p:77804122,l:1148,a:780580,c:{a:39,o:35},t:["Asia/Istanbul","Turkey","Europe/Istanbul"],d:".tr",cc:"TRY",cn:"Lira",pf:"#####",pr:"^(\\d{5})$",pc:"+90",ni:["SY","GE","IQ","IR","GR","AM","AZ","BG"],lg:["tr","ku","diq","az","av"],lc:["tr-TR","ku","diq","az","av"]},TT:{n:"Trinidad and Tobago",on:"The Republic of Trinidad and Tobago",e:"🇹🇹",eu:"U+1F1F9 U+1F1F9",i2:"TT",i3:"TTO",in:"780",gi:3573591,ci:"NA",p:1328019,l:-9999,a:5128,c:{a:11,o:-61},t:["America/Virgin","America/Port_of_Spain"],d:".tt",cc:"TTD",cn:"Dollar",pc:"+1-868",lg:["en","hns","fr","es","zh"],lc:["en-TT","hns","fr","es","zh"]},TV:{n:"Tuvalu",on:"Tuvalu",e:"🇹🇻",eu:"U+1F1F9 U+1F1FB",i2:"TV",i3:"TUV",in:"798",gi:2110297,ci:"OC",p:10472,l:-9999,a:26,c:{a:-8.51719,o:179.145},t:["Pacific/Funafuti"],d:".tv",cc:"AUD",cn:"Dollar",pc:"+688",lg:["tvl","en","sm","gil"],lc:["tvl","en","sm","gil"]},TW:{n:"Taiwan",on:"The Republic of China",e:"🇹🇼",eu:"U+1F1F9 U+1F1FC",i2:"TW",i3:"TWN",in:"158",gi:1668284,ci:"AS",p:22894384,l:1103,a:35980,c:{a:24,o:121},t:["ROC","Asia/Taipei"],d:".tw",cc:"TWD",cn:"Dollar",pf:"#####",pr:"^(\\d{5})$",pc:"+886",lg:["zh","nan","hak"],lc:["zh-TW","zh","nan","hak"]},TZ:{n:"Tanzania",on:"The United Republic of Tanzania",e:"🇹🇿",eu:"U+1F1F9 U+1F1FF",i2:"TZ",i3:"TZA",in:"834",gi:149590,ci:"AF",p:41892895,l:829,a:945087,c:{a:-6,o:35},t:["Africa/Dar_es_Salaam"],d:".tz",cc:"TZS",cn:"Shilling",pc:"+255",ni:["MZ","KE","CD","RW","ZM","BI","UG","MW"],lg:["sw","en","ar"],lc:["sw-TZ","en","ar"]},UA:{n:"Ukraine",on:"Ukraine",e:"🇺🇦",eu:"U+1F1FA U+1F1E6",i2:"UA",i3:"UKR",in:"804",gi:690791,ci:"EU",p:45415596,l:147,a:603700,c:{a:49,o:32},t:["Europe/Kiev","Europe/Simferopol","Europe/Uzhgorod","Europe/Zaporozhye"],d:".ua",cc:"UAH",cn:"Hryvnia",pf:"#####",pr:"^(\\d{5})$",pc:"+380",ni:["PL","MD","HU","SK","BY","RO","RU"],lg:["uk","ru","rom","pl","hu"],lc:["uk","ru-UA","rom","pl","hu"]},UG:{n:"Uganda",on:"The Republic of Uganda",e:"🇺🇬",eu:"U+1F1FA U+1F1EC",i2:"UG",i3:"UGA",in:"800",gi:226074,ci:"AF",p:33398682,l:1094,a:236040,c:{a:1.25,o:32.5},t:["Africa/Kampala"],d:".ug",cc:"UGX",cn:"Shilling",pc:"+256",ni:["TZ","KE","SS","CD","RW"],lg:["en","lg","sw","ar"],lc:["en-UG","lg","sw","ar"]},UM:{n:"United States Minor Outlying Islands",on:"Baker IslandHowland IslandJarvis IslandJohnston AtollKingman ReefMidway AtollNavassa IslandPalmyra AtollWake Island",e:"🇺🇲",eu:"U+1F1FA U+1F1F2",i2:"UM",i3:"UMI",in:"581",gi:5854968,ci:"OC",l:-9999,a:0,c:{a:5.875,o:-162.057},t:["Pacific/Midway","Pacific/Wake"],cc:"USD",cn:"Dollar",pc:"+1",lg:["en"],lc:["en-UM"]},US:{n:"United States of America",on:"The United States of America",e:"🇺🇸",eu:"U+1F1FA U+1F1F8",i2:"US",i3:"USA",in:"840",gi:6252001,ci:"NA",p:310232863,l:543,a:9629091,c:{a:39.76,o:-98.5},t:["America/Atka","US/Aleutian","US/Alaska","US/Central","America/Shiprock","Navajo","US/Mountain","US/Michigan","America/Indiana/Indianapolis","America/Indianapolis","US/East-Indiana","America/Knox_IN","US/Indiana-Starke","America/Louisville","US/Pacific","US/Pacific-New","US/Eastern","US/Arizona","Pacific/Johnston","US/Hawaii","America/Adak","America/Anchorage","America/Boise","America/Chicago","America/Denver","America/Detroit","America/Fort_Wayne","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Los_Angeles","America/Menominee","America/Metlakatla","America/New_York","America/Nome","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Phoenix","America/Sitka","America/Yakutat","Pacific/Honolulu"],d:".us",cc:"USD",cn:"Dollar",pf:"#####-####",pr:"^\\d{5}(-\\d{4})?$",pc:"+1",ni:["CA","MX","CU"],lg:["en","es","haw","fr"],lc:["en-US","es-US","haw","fr"]},UY:{n:"Uruguay",on:"The Oriental Republic of Uruguay",e:"🇺🇾",eu:"U+1F1FA U+1F1FE",i2:"UY",i3:"URY",in:"858",gi:3439705,ci:"SA",p:3477e3,l:115,a:176220,c:{a:-33,o:-56},t:["America/Montevideo"],d:".uy",cc:"UYU",cn:"Peso",pf:"#####",pr:"^(\\d{5})$",pc:"+598",ni:["BR","AR"],lg:["es"],lc:["es-UY"]},UZ:{n:"Uzbekistan",on:"The Republic of Uzbekistan",e:"🇺🇿",eu:"U+1F1FA U+1F1FF",i2:"UZ",i3:"UZB",in:"860",gi:1512440,ci:"AS",p:27865738,l:193,a:447400,c:{a:41.6667,o:63.8333},t:["Asia/Samarkand","Asia/Tashkent"],d:".uz",cc:"UZS",cn:"Som",pf:"######",pr:"^(\\d{6})$",pc:"+998",ni:["TM","AF","KG","TJ","KZ"],lg:["uz","ru","tg"],lc:["uz","ru","tg"]},VA:{n:"Holy See",on:"The Holy See",e:"🇻🇦",eu:"U+1F1FB U+1F1E6",i2:"VA",i3:"VAT",in:"336",gi:3164670,ci:"EU",p:921,l:62,a:.44,c:{a:41.9022,o:12.4533},t:["Europe/Vatican"],d:".va",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+379",ni:["IT"],lg:["la","it","fr"],lc:["la","it","fr"]},VC:{n:"Saint Vincent and the Grenadines",on:"Saint Vincent and the Grenadines",e:"🇻🇨",eu:"U+1F1FB U+1F1E8",i2:"VC",i3:"VCT",in:"670",gi:3577815,ci:"NA",p:104217,l:-9999,a:389,c:{a:13.0833,o:-61.2},t:["America/St_Vincent"],d:".vc",cc:"XCD",cn:"Dollar",pc:"+1-784",lg:["en","fr"],lc:["en-VC","fr"]},VE:{n:"Venezuela",on:"The Bolivarian Republic of Venezuela",e:"🇻🇪",eu:"U+1F1FB U+1F1EA",i2:"VE",i3:"VEN",in:"862",gi:3625428,ci:"SA",p:27223228,l:68,a:912050,c:{a:8,o:-66},t:["America/Caracas"],d:".ve",cc:"VES",cn:"Bolivar Soberano",pf:"####",pr:"^(\\d{4})$",pc:"+58",ni:["GY","BR","CO"],lg:["es"],lc:["es-VE"]},VG:{n:"Virgin Islands (UK)",on:"The Virgin Islands",e:"🇻🇬",eu:"U+1F1FB U+1F1EC",i2:"VG",i3:"VGB",in:"092",gi:3577718,ci:"NA",p:21730,l:-9999,a:153,c:{a:18.5,o:-64.5},t:["America/Tortola"],d:".vg",cc:"USD",cn:"Dollar",pc:"+1-284",lg:["en"],lc:["en-VG"]},VI:{n:"Virgin Islands (US)",on:"The Virgin Islands of the United States",e:"🇻🇮",eu:"U+1F1FB U+1F1EE",i2:"VI",i3:"VIR",in:"850",gi:4796775,ci:"NA",p:108708,l:82,a:352,c:{a:18.3483,o:-64.9835},t:["America/St_Thomas"],d:".vi",cc:"USD",cn:"Dollar",pf:"#####-####",pr:"^008\\d{2}(?:-\\d{4})?$",pc:"+1-340",lg:["en"],lc:["en-VI"]},VN:{n:"Vietnam",on:"The Socialist Republic of Viet Nam",e:"🇻🇳",eu:"U+1F1FB U+1F1F3",i2:"VN",i3:"VNM",in:"704",gi:1562822,ci:"AS",p:89571130,l:934,a:329560,c:{a:16.1667,o:107.833},t:["Asia/Saigon","Asia/Ho_Chi_Minh"],d:".vn",cc:"VND",cn:"Dong",pf:"######",pr:"^(\\d{6})$",pc:"+84",ni:["CN","LA","KH"],lg:["vi","en","fr","zh","km"],lc:["vi","en","fr","zh","km"]},VU:{n:"Vanuatu",on:"The Republic of Vanuatu",e:"🇻🇺",eu:"U+1F1FB U+1F1FA",i2:"VU",i3:"VUT",in:"548",gi:2134431,ci:"OC",p:221552,l:-9999,a:12200,c:{a:-16,o:167},t:["Pacific/Efate"],d:".vu",cc:"VUV",cn:"Vatu",pc:"+678",lg:["bi","en","fr"],lc:["bi","en-VU","fr-VU"]},WF:{n:"Wallis and Futuna",on:"The Territory of the Wallis and Futuna Islands",e:"🇼🇫",eu:"U+1F1FC U+1F1EB",i2:"WF",i3:"WLF",in:"876",gi:4034749,ci:"OC",p:16025,l:18,a:274,c:{a:-13.3,o:-176.2},t:["Pacific/Wallis"],d:".wf",cc:"XPF",cn:"Franc",pf:"#####",pr:"^(986\\d{2})$",pc:"+681",lg:["wls","fud","fr"],lc:["wls","fud","fr-WF"]},WS:{n:"Samoa",on:"The Independent State of Samoa",e:"🇼🇸",eu:"U+1F1FC U+1F1F8",i2:"WS",i3:"WSM",in:"882",gi:4034894,ci:"OC",p:192001,l:-9999,a:2944,c:{a:-13.8,o:-172.133},t:["Pacific/Apia"],d:".ws",cc:"WST",cn:"Tala",pc:"+685",lg:["sm","en"],lc:["sm","en-WS"]},YE:{n:"Yemen",on:"The Republic of Yemen",e:"🇾🇪",eu:"U+1F1FE U+1F1EA",i2:"YE",i3:"YEM",in:"887",gi:69543,ci:"AS",p:23495361,l:1421,a:527970,c:{a:15.5,o:47.5},t:["Asia/Aden"],d:".ye",cc:"YER",cn:"Rial",pc:"+967",ni:["SA","OM"],lg:["ar"],lc:["ar-YE"]},YT:{n:"Mayotte",on:"The Department of Mayotte",e:"🇾🇹",eu:"U+1F1FE U+1F1F9",i2:"YT",i3:"MYT",in:"175",gi:1024031,ci:"AF",p:159042,l:140,a:374,c:{a:-12.8333,o:45.1667},t:["Indian/Mayotte"],d:".yt",cc:"EUR",cn:"Euro",pf:"#####",pr:"^(\\d{5})$",pc:"+262",lg:["fr"],lc:["fr-YT"]},ZA:{n:"South Africa",on:"The Republic of South Africa",e:"🇿🇦",eu:"U+1F1FF U+1F1E6",i2:"ZA",i3:"ZAF",in:"710",gi:953987,ci:"AF",p:49e6,l:1037,a:1219912,c:{a:-29,o:24},t:["Africa/Johannesburg"],d:".za",cc:"ZAR",cn:"Rand",pf:"####",pr:"^(\\d{4})$",pc:"+27",ni:["ZW","SZ","MZ","BW","NA","LS"],lg:["zu","xh","af","nso","en","tn","st","ts","ss","ve","nr"],lc:["zu","xh","af","nso","en-ZA","tn","st","ts","ss","ve","nr"]},ZM:{n:"Zambia",on:"The Republic of Zambia",e:"🇿🇲",eu:"U+1F1FF U+1F1F2",i2:"ZM",i3:"ZMB",in:"894",gi:895949,ci:"AF",p:13460305,l:1156,a:752614,c:{a:-14.3333,o:28.5},t:["Africa/Lusaka"],d:".zm",cc:"ZMW",cn:"Kwacha",pf:"#####",pr:"^(\\d{5})$",pc:"+260",ni:["ZW","TZ","MZ","CD","NA","MW","AO"],lg:["en","bem","loz","lun","lue","ny","toi"],lc:["en-ZM","bem","loz","lun","lue","ny","toi"]},ZW:{n:"Zimbabwe",on:"The Republic of Zimbabwe",e:"🇿🇼",eu:"U+1F1FF U+1F1FC",i2:"ZW",i3:"ZWE",in:"716",gi:878675,ci:"AF",p:13061e3,l:1285,a:390580,c:{a:-19,o:29.75},t:["Africa/Harare"],d:".zw",cc:"ZWL",cn:"Dollar",pc:"+263",ni:["ZA","MZ","BW","ZM"],lg:["en","sn","nr","nd"],lc:["en-ZW","sn","nr","nd"]}};function a(i,a,n){return(i||{})[a]||(2<arguments.length&&void 0!==n?n:null)}var l,p=function(i){return i?{id:a(i,"i2"),name:a(i,"n"),officialName:a(i,"on"),emoji:a(i,"e"),emojiUnicode:a(i,"eu"),iso2:a(i,"i2"),iso3:a(i,"i3"),isoNumeric:a(i,"in"),geonameId:a(i,"gi"),continentId:a(i,"ci"),population:a(i,"p"),elevation:a(i,"l"),areaSqKm:a(i,"a"),coordinates:{latitude:a(i.c,"a"),longitude:a(i.c,"o")},timezones:a(i,"t",[]),domain:a(i,"d"),currencyCode:a(i,"cc"),currencyName:a(i,"cn"),postalCodeFormat:a(i,"pf"),postalCodeRegex:a(i,"pr"),phoneCode:a(i,"pc"),neighborCountryIds:a(i,"ni",[]),languages:a(i,"lg",[]),locales:a(i,"lc",[])}:null},i=Object.keys(r).length,t=0;function n(i,a){(l=l||Object.keys(r).reduce(function(i,a){return Object.assign(i,e({},a,null))},{}))[i]||function(i){if(!i)return;l[i.id]=i,t=Object.values(l).filter(function(i){return!!i}).length}(p(r[i]));var n,c=l[i]?o({},l[i]):null;return"string"==typeof(n=a)||n instanceof String?function(i){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return String(a).split(".").reduce(function(i,a){return(i||{})[a]||null},i)}(c,a):c}return{getCountry:n,getAllCountries:function(){return i!==t&&Object.keys(r).forEach(n),o({},l)}}});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../source-map-support/register.js":
/*!******************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map-support/register.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ */ "../../source-map-support/source-map-support.js").install();


/***/ }),

/***/ "../../source-map-support/source-map-support.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map-support/source-map-support.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var SourceMapConsumer = __webpack_require__(/*! source-map */ "../../source-map/source-map.js").SourceMapConsumer;
var path = __webpack_require__(/*! path */ "path");

var fs;
try {
  fs = __webpack_require__(/*! fs */ "fs");
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(/*! buffer-from */ "../../buffer-from/index.js");

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(process.version) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../source-map/lib/array-set.js":
/*!***************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/array-set.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "../../source-map/lib/base64-vlq.js":
/*!****************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/base64-vlq.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "../../source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "../../source-map/lib/base64.js":
/*!************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/base64.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "../../source-map/lib/binary-search.js":
/*!*******************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/binary-search.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "../../source-map/lib/mapping-list.js":
/*!******************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/mapping-list.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "../../source-map/lib/quick-sort.js":
/*!****************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/quick-sort.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "../../source-map/lib/source-map-consumer.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/source-map-consumer.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "../../source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "../../source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "../../source-map/lib/source-map-generator.js":
/*!**************************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/source-map-generator.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "../../source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "../../source-map/lib/source-node.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/source-node.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "../../source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "../../source-map/lib/util.js":
/*!**********************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/lib/util.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ "../../source-map/source-map.js":
/*!************************************************************************************************************************!*\
  !*** /home/michael/Projects/redfroggy/projects/javascript/company-id-validation/node_modules/source-map/source-map.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "../../source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "../../source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "../../source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "../../webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ })));
//# sourceMappingURL=company-id-handler.js.map