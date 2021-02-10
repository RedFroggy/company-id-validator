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
  <a href="https://travis-ci.org/RedFroggy/company-id-validator"><img src="https://travis-ci.org/RedFroggy/company-id-validator.svg?branch=master"/></a>
   <a href="https://codecov.io/gh/RedFroggy/company-id-validator"><img src="https://codecov.io/gh/RedFroggy/company-id-validator/branch/master/graph/badge.svg?token=XM9R6ZV9SJ"/></a>
   <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"/></a>
</div>


This Javascript library helps you to validate and get detailed information for a company/business identifier. 
It's inspired from this awesome [ptdnum python library](https://github.com/arthurdejong/python-stdnum)

## Why ?
- Each country has its own company/business identifier and their name and validation algorithms are very specific from one country to another.
- It is very difficult to gather information about local identifiers:
  **For example, do you know the name of the chinese company identifier ? it's format ? How to validate it ?**
- That's the purpose of this library


## Demo

You can find a [demo here](https://stackblitz.com/edit/angular-ivy-vh4hea)

## How to use it
- `npm install company-id-validator --save`
- You can now validate a company identifier based on its country code:

```javascript
import {CompanyValidation} from "./company-validation";

CompanyValidation.validate('FR', '802070748'); // Should return true
```
- You can also get detailed information:
```javascript
import {CompanyValidation} from "./company-validation";

CompanyValidation.info('FR', '802070748');


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

`npm run lint`. It will both check angular code and file naming conventions.

## Roadmap
- For now only 4 countries are supported: FR, BE, CH, AD
- Need to add many more countries based on the [ptdnum python library](https://github.com/arthurdejong/python-stdnum)
