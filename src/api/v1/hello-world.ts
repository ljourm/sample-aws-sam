import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
  const pathMessage = event.queryStringParameters?.message || "none";
  const bodyMessage = JSON.parse(event.body || "{}").message || "none";

  const output = `Hello! You said: ${pathMessage} and ${bodyMessage}`;

  console.log(output);

  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };
};
