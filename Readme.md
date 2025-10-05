## Employee Data Management (Vite React + Express + SQLite)

This repository contains a small employee management app with two parts:

- `client/` — Vite + React frontend.
- `server/` — Node.js + Express backend that uses SQLite (`employees.db`).

This README explains how to run the project locally on another machine.

## Prerequisites

- Node.js (v16+ recommended) and npm installed.
- Git (to clone the repository) — or copy the project folder to the target machine.
- On Windows, you may need build tools for native packages used by `sqlite3`. Install "Windows Build Tools" or the Visual Studio Build Tools if you see compile errors when installing `sqlite3`.

Optional:
- `nodemon` (used by the server `start` script). If you don't want to install it globally, you can run the server with `node server.js`.
- SQLite CLI (for inspecting `employees.db`) — useful but not required.

## Quick setup (clone + run)

1. Clone the repo (or copy the folder):

```bash
git clone <repo-url> employee-data-management
cd employee-data-management
```

2. Install server dependencies and start the API:

```bash
cd server
npm install
# If you want to use the package's start script (it uses nodemon):
npm run start
# OR run directly with node if nodemon is not available:
node server.js
```

The backend listens on port 5000 by default and exposes these endpoints under `/api/employees` (e.g. GET http://localhost:5000/api/employees). There's also a health endpoint at `/api/health`.

3. Install client dependencies and start the frontend (in a new terminal):

```bash
cd ../client
npm install
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`). Open that in your browser.


## Common issues & troubleshooting

- "nodemon: command not found": either install nodemon globally (`npm i -g nodemon`) or start the server with `node server.js`.
- `sqlite3` install errors on Windows: install the Visual C++ build tools (or use the prebuilt sqlite3 binaries) and then `npm install` again.
- Port 5000 already in use: stop the process using that port or change the `PORT` constant in `server/server.js` and update the client API URL accordingly.
- CORS errors: the server enables CORS by default. If you still see issues, confirm the request origin and server URL are correct.

## Useful commands summary

From the repository root (two terminals):

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

