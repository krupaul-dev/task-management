# Task Management

A full-stack blank-template starter built with the latest:

| Layer    | Technology          |
|----------|---------------------|
| Frontend | React 19 + Vite 6   |
| Backend  | Express 5 + Node 20 |

---

## Project Structure

```
task-management/
├── client/          # React 19 + Vite frontend
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       └── index.css
├── server/          # Express 5 + Node.js backend
│   └── src/
│       ├── index.js
│       └── routes/
│           └── api.js
└── package.json     # Root scripts (runs both servers)
```

---

## Getting Started

### Prerequisites
- **Node.js** ≥ 18 (v20 recommended)
- **npm** ≥ 9

### Install dependencies

```bash
npm run install:all
```

### Run in development (both servers)

```bash
npm run dev
```

| Service  | URL                      |
|----------|--------------------------|
| Frontend | http://localhost:5173    |
| Backend  | http://localhost:5000    |

### Configure the server

Copy `server/.env.example` to `server/.env` and adjust as needed:

```bash
cp server/.env.example server/.env
```

### Build the frontend for production

```bash
npm run build
```

---

## API Endpoints

| Method | Path              | Description          |
|--------|-------------------|----------------------|
| GET    | `/api/tasks`      | List all tasks       |
| GET    | `/api/tasks/:id`  | Get a single task    |
| POST   | `/api/tasks`      | Create a task        |
| PATCH  | `/api/tasks/:id`  | Update a task        |
| DELETE | `/api/tasks/:id`  | Delete a task        |

---

## Next Steps

- Connect a database (e.g. MongoDB, PostgreSQL)
- Add authentication (e.g. JWT, sessions)
- Write tests (e.g. Vitest for client, Node `node:test` for server)
- Deploy (e.g. Vercel for client, Railway/Render for server)
