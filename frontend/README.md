# React TypeScript Frontend

A modern React application built with TypeScript, React Query, React Router, and **automatically generated API client** from OpenAPI/Swagger specifications.

## Features

- **React 18** with TypeScript for type safety
- **React Router** for client-side routing and single page navigation
- **TanStack Query (React Query)** for server state management and data fetching
- **Generated API Client** from OpenAPI/Swagger specs with full TypeScript support
- **Custom hooks** for reusable data fetching logic
- **Modern CSS** with responsive design

## Generated API Client Integration

This project demonstrates how to integrate a **generated TypeScript API client** with React Query for type-safe, efficient data fetching.

### Key Files:

- `src/api/` - Generated API client and TypeScript types
- `src/hooks/usePeople.ts` - Custom React Query hooks using the generated client
- `src/components/PeopleManager.tsx` - Full CRUD demo component
- `src/pages/Users.tsx` - Simple list view using generated types

### Generated API Client Features:

1. **Type Safety**: Full TypeScript types generated from OpenAPI spec
2. **Automatic Client Generation**: No manual API client coding needed
3. **React Query Integration**: Seamless integration with React Query hooks
4. **Error Handling**: Proper error types and handling
5. **Request/Response Types**: Fully typed request parameters and responses

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
