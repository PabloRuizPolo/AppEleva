import { client } from "@/app/api/client";

const apiUrl = "api/trainings";

export const getTrainings = () => {
  return client.get(apiUrl);
};
