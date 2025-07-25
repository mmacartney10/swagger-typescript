import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Api,
  Person,
  PeopleListData,
  Error as ApiError,
} from "../../../typescript-generator/generated/api-client";
// } from "../api/api-client";

// Create API client instance
const apiClient = new Api({
  baseUrl: "/api", // Use /api as base URL to match our backend routing
});

/**
 * Custom hook for fetching people using the generated API client
 */
export const usePeople = () => {
  return useQuery<PeopleListData, ApiError>({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await apiClient.people.peopleList();
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

/**
 * Custom hook for fetching a single person by ID
 * Note: This would require implementing the endpoint in the backend
 */
export const usePerson = (id: number, enabled: boolean = true) => {
  return useQuery<Person, ApiError>({
    queryKey: ["person", id],
    queryFn: async () => {
      // This endpoint would need to be implemented in the backend
      const response = await fetch(`/api/people/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch person");
      }
      return response.json();
    },
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Custom hook for creating a new person
 * Note: This would require implementing the POST endpoint in the backend
 */
export const useCreatePerson = () => {
  const queryClient = useQueryClient();

  return useMutation<Person, ApiError, Omit<Person, "id">>({
    mutationFn: async (newPerson) => {
      // This endpoint would need to be implemented in the backend
      const response = await fetch("/api/people", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      });

      if (!response.ok) {
        throw new Error("Failed to create person");
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch people list
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });
};

/**
 * Custom hook for updating a person
 * Note: This would require implementing the PUT endpoint in the backend
 */
export const useUpdatePerson = () => {
  const queryClient = useQueryClient();

  return useMutation<Person, ApiError, Person>({
    mutationFn: async (updatedPerson) => {
      // This endpoint would need to be implemented in the backend
      const response = await fetch(`/api/people/${updatedPerson.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPerson),
      });

      if (!response.ok) {
        throw new Error("Failed to update person");
      }

      return response.json();
    },
    onSuccess: (data) => {
      // Update the specific person in cache
      queryClient.setQueryData(["person", data.id], data);
      // Invalidate and refetch people list
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });
};

/**
 * Custom hook for deleting a person
 * Note: This would require implementing the DELETE endpoint in the backend
 */
export const useDeletePerson = () => {
  const queryClient = useQueryClient();

  return useMutation<void, ApiError, number>({
    mutationFn: async (personId) => {
      // This endpoint would need to be implemented in the backend
      const response = await fetch(`/api/people/${personId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete person");
      }
    },
    onSuccess: (_, personId) => {
      // Remove the person from cache
      queryClient.removeQueries({ queryKey: ["person", personId] });
      // Invalidate and refetch people list
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });
};

// Export types for use in components
export type { Person, PeopleListData, ApiError };
export { apiClient };
