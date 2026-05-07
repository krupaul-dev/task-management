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
├── frontend/        # React 19 + Vite frontend
│   ├── public/
│   └── src/
│       ├── styles/
│       │   ├── _variables.scss   # Design tokens (colors, spacing, etc.)
│       │   ├── _mixins.scss      # Reusable SCSS mixins
│       │   └── globals.scss      # Global reset & base styles
│       ├── App.jsx
│       ├── App.scss              # Component styles (nested, uses variables/mixins)
│       └── main.jsx
├── backend/         # Express 5 + Node.js backend
│   ├── .env.example
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
- **Docker** + **Docker Compose**

### Install dependencies

```bash
npm run install:all
```

### Create backend environment file

```bash
cp backend/.env.example backend/.env
```

Then set your local database values in `backend/.env`:

```dotenv
DATABASE_URL=postgresql://app_user:app_pass@localhost:5433/task_manager
DB_HOST=localhost
DB_PORT=5433
DB_NAME=task_manager
DB_USER=app_user
DB_PASSWORD=app_pass
```

### Start local database (Docker)

```bash
npm run db:up
```

Useful database commands:

```bash
npm run db:ps
npm run db:logs
npm run db:down
```

### Run in development (both servers)

```bash
npm run dev
```

Or start DB and app together:

```bash
npm run dev:with-db
```

| Service  | URL                      |
|----------|--------------------------|
| Frontend | http://localhost:5173    |
| Backend  | http://localhost:5000    |
| Postgres | localhost:5433           |

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
- Write tests (e.g. Vitest for frontend, Node `node:test` for backend)
- Deploy (e.g. Vercel for frontend, Railway/Render for backend)
