# Swagger to TypeScript Generator

This project converts your Swagger/OpenAPI JSON specification into TypeScript types and a complete API client.

## Generated Files

- `./generated/api-types.ts` - Pure TypeScript type definitions (from openapi-typescript)
- `./generated/api-client.ts` - Complete API client with all methods (from swagger-typescript-api)

## Usage

### Option 1: Generate Types Only

Run this to generate just the TypeScript types:

```bash
npm run generate-types
```

### Option 2: Generate Complete API Client

Run this to generate a full API client with methods for all endpoints:

```bash
npm run generate-client
```

## Using the Generated API Client

The generated API client includes methods for all your API endpoints. Here's how to use it:

```typescript
import { Api } from "./generated/api-client";

// Create API client instance
const apiClient = new Api({
  baseUrl: "http://localhost:3000", // Your API base URL
  // Add authentication if needed
  securityWorker: (token) => ({
    headers: { Authorization: `Bearer ${token}` },
  }),
});

// Use the generated methods - no need to write your own!
const people = await apiClient.people.peopleList();
console.log("Retrieved people:", people.data);
```

### Available API Methods

The generated client includes methods for all your endpoints, such as:

- `apiClient.people.peopleList()` - Get all people from the system

Each method includes:

- ✅ Full TypeScript type safety
- ✅ JSDoc documentation
- ✅ Request/response type definitions
- ✅ Error handling types
- ✅ Automatic serialization/deserialization

### Example Usage

```typescript
import { getAllPeople } from "./api-client-usage";

// Get all people with proper TypeScript types
const people = await getAllPeople();

// TypeScript knows the structure of Person objects
people.forEach((person) => {
  console.log(`${person.name} (${person.age}) works as ${person.occupation}`);
  console.log(`Lives in ${person.city}, contact: ${person.email}`);
});
```

### Type-Only Usage (Alternative)

If you prefer to write your own fetch logic, use the pure types:

```typescript
import type { paths, components } from "./generated/api-types";

// Extract types for specific endpoints
type WatchlistEndpoint =
  paths["/api/1/customers/{customerId}/watchlists/{headerId}"];
type UpdateOperation = WatchlistEndpoint["put"];
type UpdateRequest = UpdateOperation["requestBody"];
type UpdateResponse = UpdateOperation["responses"];
```

## Files

- `api-docs.json` - Your Swagger/OpenAPI specification (currently a simple People API)
- `package.json` - Project configuration with generation scripts
- `index.js` - Configuration for swagger-typescript-api
- `generated/api-client.ts` - Generated API client with methods
- `generated/api-types.ts` - Generated TypeScript types
- `api-client-usage.ts` - Example usage of the generated API client
- `test-api-client.ts` - Test file to verify the API client works

## Development

To regenerate after updating your Swagger specification:

```bash
# Generate types only
npm run generate-types

# Generate full API client
npm run generate-client
```

## Benefits of the Generated API Client

✅ **No manual coding** - All API methods are generated automatically
✅ **Type safety** - Full TypeScript support with IntelliSense
✅ **Documentation** - JSDoc comments for all methods
✅ **Error handling** - Proper error types for each endpoint
✅ **Consistency** - All methods follow the same pattern
✅ **Maintenance** - Re-generate when your API changes
