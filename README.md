# aws-node-api

A simple Node.js Express API that connects to a Microsoft SQL Server database using `mssql`.

## Overview

This repository demonstrates a basic REST API that returns rows from an `Employees` table in a SQL Server database.

## Prerequisites

- Node.js installed
- A running SQL Server instance reachable from this app
- A database named `DemoDB` with an `Employees` table

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Update the SQL configuration in `server.js`:

   ```js
   const config = {
     user: "SA",
     password: "NewPass@123",
     server: "172.31.34.227",
     database: "DemoDB",
     port: 1433,
     options: {
       encrypt: false,
       trustServerCertificate: true,
     },
   };
   ```

   Replace `server` with your SQL Server host or IP address and adjust credentials as needed.

## Running the app

```bash
node server.js
```

The server listens on port `3000`.

## API Endpoints

- `GET /` - Health check endpoint
- `GET /employees` - Returns all rows from the `Employees` table

## Notes

- This app uses CommonJS modules (`type: commonjs` in `package.json`).
- Keep production secrets out of source control. Use environment variables or a secure secrets store for credentials.

