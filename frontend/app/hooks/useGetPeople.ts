import { useQuery } from "@tanstack/react-query";

import type {
  PeopleListData,
} from "../../generated/api-client";
import { apiClient } from "../services/api-service";

export const useGetPeople = () => {
  return useQuery<PeopleListData>({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await apiClient.api.peopleList({ format: "json" });
      console.log("response", response);
      return response.data;
    },
  });
};