# Swagger TypeScript Project

A full-stack TypeScript application with automatic API client generation from Swagger/OpenAPI specifications.

## 🏗️ Project Structure

```
├── backend/          # Express.js API server
├── frontend/         # React Router application
├── typescript-generator/ # Standalone TypeScript generator
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### 1. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Start the Backend Server

```bash
cd backend
npm run dev
```

The backend will start on `http://localhost:3001` with:

- API endpoints at `/api/people`
- Swagger documentation at `/api-docs`
- Swagger JSON at `/swagger.json`

### 3. Generate TypeScript API Client

```bash
cd frontend
npm run generate-typescript
```

This generates TypeScript client code from the backend's Swagger specification.

### 4. Start the Frontend

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📖 Additional Information

The project demonstrates how to create a type-safe full-stack application where the frontend automatically stays in sync with backend API changes through generated TypeScript clients.
