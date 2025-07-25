// Example of using the generated API client
import { Api } from "./generated/api-client";
import type { Person, Error as ApiError } from "./generated/api-client";

// Create an instance of the API client
const apiClient = new Api({
  baseUrl: "http://localhost:3000", // Replace with your actual API base URL
  // Add any default headers, authentication, etc.
  securityWorker: (securityData) => {
    // Add authentication logic here if needed
    return securityData
      ? {
          headers: {
            Authorization: `Bearer ${securityData}`,
          },
        }
      : {};
  },
});

// Example: Get all people - this method is generated for you!
export async function getAllPeople(): Promise<Person[]> {
  try {
    const response = await apiClient.people.peopleList();
    return response.data;
  } catch (error) {
    console.error("Failed to get people:", error);
    throw error;
  }
}

// Example: Using the API client directly
export async function directApiUsage() {
  try {
    // Get all people
    const people = await apiClient.people.peopleList();

    console.log("Retrieved people:", people.data);
    return people.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}

// Example: Using with error handling and types
export async function getPeopleWithErrorHandling(): Promise<Person[] | null> {
  try {
    const response = await apiClient.people.peopleList();

    // The response includes both data and metadata
    console.log("Status:", response.status);
    console.log("Headers:", response.headers);
    console.log("Data:", response.data);

    return response.data;
  } catch (error: any) {
    // Handle specific API errors
    if (error.response) {
      const apiError = error.response.data as ApiError;
      console.error("API Error:", apiError.message, "Code:", apiError.code);
    } else {
      console.error("Network Error:", error.message);
    }
    return null;
  }
}

// Example: Using with async/await and proper TypeScript types
export async function demonstrateTypeScript(): Promise<void> {
  const people = await getAllPeople();

  // TypeScript knows the structure of Person objects
  people.forEach((person: Person) => {
    console.log(
      `${person.name} (${person.age}) works as ${person.occupation} in ${person.city}`
    );
    console.log(`Contact: ${person.email}`);
  });
}

// Export the client instance if you want to use it elsewhere
export { apiClient };
