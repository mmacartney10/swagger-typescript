import { useQuery } from "@tanstack/react-query";
import { Person, PeopleListData, Error as ApiError } from "../api/api-client";
import { apiClient } from "../services/api-service";

export const usePeople = () => {
  return useQuery<PeopleListData, ApiError>({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await apiClient.api.peopleList({ format: "json" });
      console.log("response", response);
      return response.data;
    },
  });
};

export type { Person, PeopleListData, ApiError };
export { apiClient };
