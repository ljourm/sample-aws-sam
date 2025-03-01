import { ScheduledHandler } from "aws-lambda";

interface MyEventDetail {
  key1: string;
  key2: string;
}

export const handler: ScheduledHandler<MyEventDetail> = async (event) => {
  console.log("Event received:", event);

  const { key1, key2 } = event.detail;

  // Your logic here
  console.log(`Key1: ${key1}, Key2: ${key2}`);
};
