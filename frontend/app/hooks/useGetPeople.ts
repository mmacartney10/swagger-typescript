import { useQuery } from "@tanstack/react-query";
import type { PeopleListData } from "generated/api-client";
import { apiClient } from "~/services/api-service";

export const useGetPeople = () => {
  return useQuery<PeopleListData>({
    queryKey: ["getPeople"],
    queryFn: async () => {
      const response = await apiClient.peopleService.peopleList();
      return response.data;
    },
  });
};
