import {APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda';

import '../validators';
import {CompanyId} from "../company-id";

export async function getCompanyInfoByCountryCodeAndId(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  return new Promise((resolve) => {
    resolve({
      statusCode: 200,
      body: JSON.stringify(CompanyId.info(event.pathParameters.countryCode, event.pathParameters.companyId)),
    });
  });
}
