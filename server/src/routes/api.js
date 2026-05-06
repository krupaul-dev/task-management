import { Router } from 'express';
import { randomUUID } from 'node:crypto';

const router = Router();

// Example in-memory tasks (replace with a database in production)
let tasks = [
  { id: randomUUID(), title: 'Set up the project', completed: true },
  { id: randomUUID(), title: 'Build the API', completed: false },
  { id: randomUUID(), title: 'Create the UI', completed: false },
];

// GET /api/tasks
router.get('/tasks', (_req, res) => {
  res.json(tasks);
});

// GET /api/tasks/:id
router.get('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST /api/tasks
router.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const newTask = { id: randomUUID(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PATCH /api/tasks/:id
router.patch('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
});

// DELETE /api/tasks/:id
router.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(index, 1);
  res.status(204).send();
});

export default router;
