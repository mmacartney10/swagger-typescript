import { Api } from "../../generated/api-client";

export const apiClient = new Api({
  baseUrl: "http://localhost:3001",
  baseApiParams: {
    format: "json",
    headers: {
      "Content-Type": "application/json",
    },
  },
});
