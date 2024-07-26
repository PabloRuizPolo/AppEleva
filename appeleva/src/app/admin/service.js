import { client } from "../api/client";

const apiUrl = "api/trainings";

export const postTraining = (training) => {
  return client.post(apiUrl, training);
};
