# Company id validator

<div align="center">
  <a name="logo" href="https://www.redfroggy.fr"><img src="assets/logo.png" alt="RedFroggy"></a>
  <h4 align="center">A RedFroggy project</h4>
</div>
<br/>

<div align="center">
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/fuck-it-ship-it.svg"/></a>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/built-with-love.svg"/></a>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/made-with-javascript.svg"/></a>
</div>
<div align="center">
  <a href="https://circleci.com/gh/RedFroggy/company-id-validator"><img src="https://circleci.com/gh/RedFroggy/company-id-validator.svg?style=svg"/></a>
   <a href="https://codecov.io/gh/RedFroggy/company-id-validator"><img src="https://codecov.io/gh/RedFroggy/company-id-validator/branch/master/graph/badge.svg?token=XM9R6ZV9SJ"/></a>
   <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"/></a>
</div>


This Javascript library helps you to validate and get detailed information for a company/business identifier. 
It's inspired from this awesome [ptdnum python library](https://github.com/arthurdejong/python-stdnum)

## Why ?
- Each country has its own company/business identifier and their name and validation algorithms are very specific from one country to another.
- It is very difficult to gather information about local company identifiers:
  **For example, do you know the name of the chinese company identifier ? it's format ? How to validate it ?**
- That's the purpose of this library


## Demo

You can find a [demo here](https://stackblitz.com/edit/angular-ivy-vh4hea)

## How to use it
- `npm install company-id-validator --save`
- You can now validate a company identifier based on its country code:

```javascript
import { CompanyValidation } from 'company-id-validator';

CompanyValidation.validate('FR', '802070748'); // Should return true
```
- You can also get detailed information:
```javascript
import { CompanyValidation } from 'company-id-validator';

const info = CompanyValidation.info('FR', '802070748');
console.log(info);
```
```json
{
  "valid": true,
  "query": "802070748",
  "sanitizedQuery": "802070748",
  "companyIdDescription": "Système d'Identification du Répertoire des Entreprises",
  "companyIdName": "SIREN",
  "trustedSourceUrl": "https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_entreprises",
  "pattern": "^\\d{9}$",
  "parentLevel": true,
  "countryCode": "FR",
  "companyId": "802070748",
  "vatNumber": "FR89802070748"
}
```

## Getting started

- `npm install` to get node dependencies
- `npm run build` to build the application

## Tests

### Unit tests

- `npm run test` to start Jest tests.
- `npm run test:ci` to run with coverage:
- HTML and coverage reports are generated under the `dist/test-results/html` and `dist/test-results/lcov-report` folders.

## Code quality

`npm run lint`. Will check your code based on `tslint.json` config file

## Roadmap
- For now only 6 countries are supported: FR, BE, CH, AD, CN, IT
- Need to add many more countries based on the [ptdnum python library](https://github.com/arthurdejong/python-stdnum)
