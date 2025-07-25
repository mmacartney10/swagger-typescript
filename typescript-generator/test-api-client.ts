// Simple test to verify the generated API client works
import {
  getAllPeople,
  directApiUsage,
  getPeopleWithErrorHandling,
} from "./api-client-usage";

async function testApiClient() {
  console.log("Testing generated API client...\n");

  try {
    // Test 1: Using wrapper function
    console.log("1. Testing getAllPeople():");
    const people = await getAllPeople();
    console.log(`Found ${people.length} people`);
    console.log("First person:", people[0]);
    console.log("");

    // Test 2: Direct API usage
    console.log("2. Testing direct API usage:");
    const directResult = await directApiUsage();
    console.log(`Direct call returned ${directResult.length} people`);
    console.log("");

    // Test 3: Error handling example
    console.log("3. Testing with error handling:");
    const safeResult = await getPeopleWithErrorHandling();
    if (safeResult) {
      console.log(`Safe call returned ${safeResult.length} people`);
    } else {
      console.log("Safe call returned null (error occurred)");
    }
  } catch (error) {
    console.error("Test failed:", error);
  }
}

export { testApiClient };
