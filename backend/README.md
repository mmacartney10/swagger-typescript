# Insert Name Here API

A simple TypeScript API built with Polka framework and Swagger documentation.

## Features

- 🚀 Fast and lightweight Polka server
- 📚 Swagger/OpenAPI documentation
- 🔧 TypeScript support
- 📦 Modular architecture

## Installation

```bash
npm install
```

## Development

```bash
# Build the project
npm run build

# Run the server
npm start

# Development mode (build and run)
npm run dev

# Watch mode for TypeScript compilation
npm run dev:watch
```

## API Documentation

Once the server is running, you can access:

- **Swagger UI**: http://localhost:3000/api-docs
- **OpenAPI JSON**: http://localhost:3000/swagger.json
- **Home Page**: http://localhost:3000/home

## API Endpoints

### GET /people

Returns a list of all people in the system.

**Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com",
    "city": "New York",
    "occupation": "Software Developer"
  }
]
```

### GET /home

Serves the main HTML page.

### GET /api-docs

Interactive Swagger UI documentation.

### GET /swagger.json

OpenAPI specification in JSON format.

## Project Structure

```
├── src/
│   ├── getPeople/
│   │   ├── index.ts       # People API endpoint implementation
│   │   └── types.ts       # Type definitions
│   ├── index.ts           # Main server file
│   ├── swagger.ts         # Complete Swagger/OpenAPI documentation
│   └── types.d.ts         # Custom type declarations
├── dist/                  # Compiled JavaScript
├── index.html             # Static HTML page
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Technologies Used

- **Polka**: Fast HTTP server framework
- **TypeScript**: Type-safe JavaScript
- **Swagger UI Express**: API documentation
- **Swagger JSDoc**: OpenAPI specification generation

## Documentation Structure

All API documentation is centralized in a single file using JSON format:

- **`src/swagger.ts`**: Complete OpenAPI 3.0 specification including:
  - API metadata (title, version, description)
  - Server configuration
  - All endpoint definitions (`/people`, `/home`)
  - Component schemas (`Person`, `Error`)
  - Tags and descriptions

This structure provides:

- ✅ **Centralized Management** - All documentation in one place
- ✅ **Type Safety** - Full TypeScript support for OpenAPI specifications
- ✅ **JSON Format** - Clean, structured syntax instead of comments
- ✅ **Easy Maintenance** - Single file to update for all API changes
- ✅ **IntelliSense Support** - Auto-completion and validation in your IDE

### Adding New Endpoints

To add a new endpoint, simply add it to the `paths` object in `src/swagger.ts`:

```typescript
paths: {
  '/people': { /* existing endpoint */ },
  '/home': { /* existing endpoint */ },
  '/new-endpoint': {
    get: {
      summary: 'Your new endpoint',
      tags: ['YourTag'],
      responses: {
        '200': {
          description: 'Success response',
          content: {
            'application/json': {
              schema: { type: 'object' }
            }
          }
        }
      }
    }
  }
}
```
