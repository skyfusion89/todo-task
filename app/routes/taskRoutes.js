// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');

// POST a new task
router.post('/', authMiddleware, createTask);

// GET all tasks
router.get('/', authMiddleware, getTasks);

// GET a single task by id
router.get('/:id', authMiddleware, getTask);

// UPDATE a task by id
router.put('/:id', authMiddleware, updateTask);

// DELETE a task by id
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
