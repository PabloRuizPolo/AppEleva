import { client } from "../api/client";

const apiUrl = "api/users";

export const getUsers = () => {
  return client.get(apiUrl);
};
