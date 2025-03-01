import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
  const pathMessage = event.queryStringParameters?.message || "none";
  const bodyMessage = JSON.parse(event.body || "{}").message || "none";
  const env = process.env.ENV;
  const hoge = process.env.HOGE;

  const output = { pathMessage, bodyMessage, env, hoge };

  console.log(output);

  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };
};
