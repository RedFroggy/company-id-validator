import {APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda';

import '../validators';
import {CompanyId} from "../company-id";

export async function getCompanyInfoByCountryCodeAndId(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  return new Promise((resolve) => {
    try {
      const companyInfo = CompanyId.info(event.pathParameters.countryCode, event.pathParameters.companyId);
      resolve({
        statusCode: 200,
        body: JSON.stringify(companyInfo),
      });
    } catch(error) {
      resolve({
        statusCode: 400,
        body: JSON.stringify({reason: error.message})
      });
    }
  });
}
