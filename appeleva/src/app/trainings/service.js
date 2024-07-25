import { client } from "@/app/api/client";

const apiUrl = "api/trainings";

export const getTrainings = () => {
  return client.get(apiUrl);
};
export const postTraining = (training) => {
  return client.post(training);
};
