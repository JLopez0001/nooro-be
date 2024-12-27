# Todo App Backend

This is the backend for the Todo App, which provides API endpoints for managing tasks. It is built with Node.js, Prisma ORM, and MySQL.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

---

## Features

- Create, update, delete, and fetch tasks.
- Tasks support colors, completion status, and timestamps.
- Simple and efficient RESTful API.
- Powered by Prisma ORM for database management.

---

## Tech Stack

- **Backend Framework**: Node.js / Express.js
- **Database**: MySQL
- **ORM**: Prisma
- **Environment Management**: dotenv

---

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- MySQL (>=8.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JLopez0001/nooro-be.git
   cd nooro-be
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add `.env` file to the root and copy the content from `.env.sample` then configure the `DATABASE_URL` to your own.

4. Run Migrations

   ```bash
   npm run orm:migrate
   ```

5. Seed DB

   ```bash
   npm run seed:db
   ```

6. Run Server
   ```bash
   npm run start:dev
   ```

The server will be running at http://localhost:3000.
