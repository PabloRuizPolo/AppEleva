import { client } from "../api/client";

const apiUrl = "api/trainings";

export const getTrainings = () => {
  return client.get(apiUrl);
};
