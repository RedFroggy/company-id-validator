import {APIGatewayEvent} from "aws-lambda";
import {getCompanyInfoByCountryCodeAndId} from "./company-id-handler";

describe('Lambda companyId handler unit tests', () => {

  it('should get company info', async () => {

    const event: Partial<APIGatewayEvent> = {
      pathParameters: {
        countryCode: 'FR',
        companyId: '802070748'
      }
    };

    const result = await getCompanyInfoByCountryCodeAndId(event as APIGatewayEvent);
    expect(result.statusCode).toBe(200);
    expect(result.body).toBeDefined();
  });

  it('should return bad request if an error occurs', async () => {

    const event: Partial<APIGatewayEvent> = {
      pathParameters: {
        countryCode: 'ZZ',
        companyId: '802070748'
      }
    };

    const result = await getCompanyInfoByCountryCodeAndId(event as APIGatewayEvent);
    expect(result.statusCode).toBe(400);
    expect(result.body).toEqual(JSON.stringify({
      reason: `Invalid isoAlpha2 country code`}
    ));
  });

});
