# Monorepo for Next.js Authentication Applications

This monorepo contains some applications, including some Next.js applications to work with authentication using app router and pages router and a Nest.js service for providing data.

The applications have accessToken and refreshToken sessions.

## Applications

### 1. next-js-app-router-simple-auth

A simple Next.js application where we explore implementing basic authentication using only iron session on app router.

#### Features

- App router
- User login
- Protected routes
- Client and Server Components authentication
- Tanstack Query for client components

#### Technologies

- Next.js
- React

#### Getting Started

1. Clone this repository.
2. Navigate to the `next-js-simple-auth` directory.
3. Install dependencies with `npm install` or `yarn install`.
4. Start the development server with `npm run dev` or `yarn dev`.

### 2. next-js-app-router-with-auth-js

A Next.js application where we explore implementing authentication using Auth.js (previously known as next-auth) on app router.

#### Features

- JWT token-based authentication
- Protected routes

#### Technologies

- Next.js
- React
- Auth.js (previously next-auth)

#### Getting Started

1. Clone this repository.
2. Navigate to the `next-with-auth-js` directory.
3. Install dependencies with `npm install` or `yarn install`.
4. Start the development server with `npm run dev` or `yarn dev`.

### 3. nest-js-service

A Nest.js service providing a simple authentication method and an authenticated GET endpoint to retrieve a list of games.

#### Features

- Simple authentication with access and refresh token
- Authenticated GET endpoint for games list

#### Technologies

- Nest.js
- TypeScript
- Prisma
- SQLite

#### Getting Started

1. Clone this repository.
2. Navigate to the `nest-js-service` directory.
3. Install dependencies with `npm install` or `yarn install`.
4. Set up your SQLite database and configure the environment variables.
5. Start the development server with `npm run start` or `yarn start`.

## Integration

You can integrate the Nest.js service with the Next.js applications to fetch the list of dogs and display them in your UI.

## Contributing

Contributions are welcome! If you'd like to contribute to any of these applications, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.
