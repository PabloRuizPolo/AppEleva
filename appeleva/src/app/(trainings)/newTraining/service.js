import { client } from "@/app/api/client";

const apiUrl = "api/trainings";

export const postTraining = (training) => {
  return client.post(apiUrl, training);
};
