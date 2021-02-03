const fs = require('fs');
const glob = require('glob');

listFiles();

function listFiles() {
  glob("src/data/**/*.json", (err, filesPath) => {
    if (err) {
      console.error(`Fail to list json files under src/data`, err);
      throw err
    }
    filesPath.forEach(filePath => {
      readFile(filePath);
    })
  });
}

function readFile(filePath) {
  fs.readFile(filePath, 'utf-8', (err, json) => {
    if (err) {
      console.error(`File ${filePath} not found`, err);
      throw err
    }

    const countryCode = filePath.split('/')[2].toUpperCase();
    const data = JSON.parse(json);
    data.forEach((c) => c.countryCode = countryCode);

    writeFile(filePath, JSON.stringify(data, null, 2), countryCode);

  })
}

function writeFile(filePath, json, countryCode) {
  const tsContent = `import {CompanyInfo} from "../../types/company-info.model";

export const COMPANY_${countryCode}_DATA: CompanyInfo[] = ${json};`;

  const fileToGenerate = filePath.replace('.json', '.model.ts');
  fs.writeFile(fileToGenerate, tsContent, (err) => {
    if (err) {
      console.error(`Fail to write file ${fileToGenerate}`, err);
      throw err
    }

    console.log(`File ${fileToGenerate} successfully generated`);
  });
}
