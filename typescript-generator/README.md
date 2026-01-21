# TypeScript API Generator

A standalone TypeScript API client generator that converts Swagger/OpenAPI specifications into type-safe TypeScript code.

## Overview

This tool generates two types of outputs from your Swagger/OpenAPI specification:

- **Type definitions** using `openapi-typescript`
- **Complete API client** using `swagger-typescript-api` with tag-based organization

## Setup

### Prerequisites

- Node.js (v18 or higher)
- A running API server with Swagger/OpenAPI documentation

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file with your Swagger JSON endpoint:

```env
SWAGGER_DOCS_URL=http://localhost:3001/swagger.json
```

## Usage

### Generate API Client

```bash
npm run build
```

This will generate files in the `./generated` directory:

- `api-client.ts`
- `api-types.ts`

### Basic Usage

```typescript
import { People } from "./generated/People";

const peopleApi = new People({
  baseUrl: "http://localhost:3001",
  baseApiParams: {
    headers: {
      "Content-Type": "application/json",
    },
  },
});

// Use the API
const people = await peopleApi.peopleList();
const newPerson = await peopleApi.peopleCreate(personData);
```

### Organized by Tags

The generator uses `moduleNameFirstTag: true` to organize endpoints by their Swagger tags:

- **People tag** → `People.ts` with methods like `peopleList()`, `peopleCreate()`
- **About tag** → `About.ts` with methods like `aboutGet()`

### Type Definitions

Import types from the contracts file:

```typescript
import type { Person, PeopleType } from "./generated/data-contracts";
```

## Development

To regenerate after API changes:

```bash
npm run build
```

The generator will fetch the latest Swagger specification and regenerate all TypeScript files.

## Benefits

✅ **Automatic Synchronization** - Stay in sync with API changes  
✅ **Type Safety** - Catch API mismatches at compile time  
✅ **Developer Experience** - IntelliSense and autocompletion  
✅ **Maintainability** - No manual API client code to maintain  
✅ **Consistency** - Standardized API calling patterns
