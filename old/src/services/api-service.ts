import { Api } from "../api/api-client";

export const apiClient = new Api({
  baseUrl: "",
  baseApiParams: {
    headers: {
      "Content-Type": "application/json",
    },
  },
});
