import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async () => {
  console.log("Hello, World!");

  return {
    statusCode: 200,
    body: JSON.stringify("Hello, World!"),
  };
};
