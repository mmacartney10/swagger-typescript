import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Person,
  PeopleListData,
  Error as ApiError,
  PeopleCreatePayload,
} from "../api/api-client";
import { apiClient } from "../services/api-service";

export const useGetPeople = () => {
  return useQuery<PeopleListData, ApiError>({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await apiClient.api.peopleList({ format: "json" });
      console.log("response", response);
      return response.data;
    },
  });
};

export const usePostPerson = () => {
  const queryClient = useQueryClient();

  return useMutation<Person, ApiError, PeopleCreatePayload>({
    mutationFn: async (person: PeopleCreatePayload) => {
      const response = await apiClient.api.peopleCreate(person, {
        format: "json",
      });
      console.log("Created person response:", response);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate and refetch the people list
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
    onError: (error) => {
      console.error("Error creating person:", error);
    },
  });
};

export type { Person, PeopleListData, ApiError };
export { apiClient };
