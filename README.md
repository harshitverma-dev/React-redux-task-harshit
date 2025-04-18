# React Redux Product Listing Application

A React application built with Redux Toolkit for state management, featuring product listing, filtering, searching and product detail views.

## Features

- Product listing with search and category filters
- Detailed product view
- State management with Redux Toolkit
- Responsive design
- Unit testing with Vitest

## Prerequisites

Before running this project, make sure you have:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/harshitverma-dev/React-redux-task-harshit.git
cd React-redux-task-harshit
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Running Tests

To run the test suite:
```bash
npm test
```

To run tests in watch mode:
```bash
npm test -- --watch
```

To update snapshots:
```bash
npm test -- -u
```

## Build

To create a production build:
```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── store.js                # Redux store configuration
│   └── features/               # Redux slices
│       ├── ListView/           # Product listing features
│       │   └── ProductSlice.js 
│       └── SearchAndFilter/    # Search and filter features
│           └── SearchAndFilterSlice.js
│
├── components/                 # Reusable components
│   ├── Loader/                 # Loading spinner component
│   │   ├── Loader.jsx
│   │   └── Loader.css
│   └── ProductListItem/       # Product single item
│       ├── ProductListItem.jsx
│       └── ProductListItem.css
│
├── pages/                     # Page components
│   ├── ProductListing/        # Product listing page
│   │   ├── ProductListing.jsx
│   │   └── ProductListing.css
│   ├── ProductDetail/          # Product detail page
│   │   ├── ProductDetail.jsx
│   │   └── ProductDetail.css
│   └── NotFound/             # 404 page
│       ├── NotFound.jsx
│       └── NotFound.css
│
├── __tests__/                # Test files directory
│   ├── components/
│   │   ├── Loader.test.jsx
│   │   └── ProductListItem.test.jsx
│   ├── pages/
│   │   └── NotFound.test.jsx
│   └── features/
│       ├── ProductSlice.test.js
│       └── SearchAndFilterSlice.test.js
│
├── setupTests.js             # Test configuration
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

### Key Directories

- **app/**: Contains Redux store setup and feature slices
- **components/**: Reusable UI components with their styles
- **pages/**: Page-level components with routing logic
- **__tests__/**: some test files organized.
- **features/**: Redux slice files for state management

## Technologies Used

- React 18
- Redux Toolkit
- React Router DOM
- Vitest
- Testing Library
- Vite

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm test` - Runs test suite


