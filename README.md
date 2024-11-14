# DevConnect: A Real-Time Chat App

DevConnect is a feature-rich real-time chat application built with modern web technologies. It offers real-time messaging, user authentication, and state management, providing an interactive and seamless chat experience.

## Features

- **Tech Stack**: PERN (Postgres, Express, React, Node.js) + TypeScript + Socket.io + Prisma + TailwindCSS.
- **Authentication & Authorization**: Implemented using JSON Web Tokens (JWT).
- **Real-time Messaging**: Powered by Socket.io.
- **Online User Status**: Managed with Socket.io and React Context.
- **Global State Management**: Handled by Zustand.
- **Error Handling**: Robust error management on both server and client sides.
- **TypeScript Best Practices**: Leveraging TypeScript for type safety and improved developer experience.
- **Deployment**: Deploy your app for free like a pro.
- **And much more!**

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [PostgreSQL](https://www.postgresql.org/) (v13 or later)

### Run Locally

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/devconnect.git
cd devconnect
```

#### 2. Set Up the Environment Variables

Create a `.env` file in the root directory and populate it with the following:

```env
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=3001
```

#### 3. Install Dependencies

Run the following command to install the necessary packages:

```bash
npm install
```

#### 4. Set Up the Database

Use Prisma to initialize the database:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

#### 5. Build the App

Compile the TypeScript code:

```bash
npm run build
```

#### 6. Start the App

To start the app in production mode:

```bash
npm start
```

For development:

```bash
npm run dev
```

The app will run on `http://localhost:3001` by default (or the port specified in your `.env` file).

---

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL, Prisma ORM
- **Real-time Communication**: Socket.io
- **State Management**: Zustand

---

## Key Features Explained

### 1. **Authentication & Authorization**
   - JWT-based authentication ensures secure access.
   - Middleware protects routes requiring authentication.

### 2. **Real-time Messaging**
   - Socket.io enables instant communication between users.

### 3. **Online User Status**
   - Online presence is managed using Socket.io and React Context.

### 4. **Error Handling**
   - Centralized error handling on both server and client sides ensures a smooth user experience.

### 5. **Global State Management**
   - Zustand is used for efficient and minimal boilerplate global state management.

---

## Deployment

You can deploy this app for free using platforms like:
- **Vercel** for the frontend.
- **Railway** or **Render** for the backend and database.

### Deployment Steps:

1. **Frontend**: 
   - Push your frontend code to a GitHub repository.
   - Connect the repository to Vercel and deploy.

2. **Backend**:
   - Push your backend code to GitHub.
   - Connect the repository to Railway/Render and deploy.
   - Set environment variables in the platform's dashboard.

---

## Scripts

- `npm run dev`: Run the app in development mode.
- `npm run build`: Build the project for production.
- `npm start`: Start the app in production mode.

---

Happy Coding! 🚀
