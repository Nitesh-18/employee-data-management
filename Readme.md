## Employee Data Management (Vite React + Express + SQLite)

This repository contains a small employee management app with two parts:

- `client/` — Vite + React frontend.
- `server/` — Node.js + Express backend that uses SQLite (`employees.db`).

This README focuses on running the app locally and explains database connectivity clearly and separately.

## Prerequisites

- Node.js (v16+ recommended) and npm.
- Git (to clone) or copy the project folder to the target machine.
- On Windows: Visual C++ build tools may be required to install the `sqlite3` package.

Optional:
- `nodemon` (server `start` script uses it; not required).
- SQLite CLI or DB Browser for SQLite to inspect `employees.db`.

## Quick setup (clone + run)

1. Clone the repo:

```bash
git clone <repo-url> employee-data
cd employee-data
```

2. Start the server (API):

```bash
cd server
npm install
# start (uses nodemon if available)
npm run start
# or run directly:
node server.js
```

The backend listens on port 5000 by default and exposes endpoints under `/api/employees` and a health route at `/api/health`.

3. Start the client (in a new terminal):

```bash
cd client
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

## Useful commands summary

Terminal A — Start server:

```bash
cd server
npm install
npm run start    # or: node server.js
```

Terminal B — Start client:

```bash
cd client
npm install
npm run dev
```

## Project structure (high level)

- `client/` — Vite + React source in `client/src`.
- `server/` — Express server files; DB helper in `server/db.js`; routes in `server/routes/employees.js`; `employees.db` in the server folder.


