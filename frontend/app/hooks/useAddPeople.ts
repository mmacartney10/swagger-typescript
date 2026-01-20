import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Person } from "../../generated/api-client";
import { apiClient } from "~/services/api-service";

export const useAddPeople = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPerson: Person) => {
      const response = await apiClient.people.peopleCreate(newPerson, {
        format: "json",
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });
};
