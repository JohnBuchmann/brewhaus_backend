# Brewery GraphQL API

A GraphQL wrapper for the Open Brewery DB REST API built with Apollo Server and TypeScript.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env` (already created with defaults)

3. Run development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run type-check` - Run TypeScript type checking

## GraphQL Endpoint

Once running, the GraphQL playground will be available at:
```
http://localhost:4000/graphql
```

## Architecture

- **Apollo Server 4**: GraphQL server
- **TypeScript**: Type safety throughout
- **Open Brewery DB**: External REST API data source
- **In-memory caching**: Simple TTL-based cache for performance
