require('dotenv').config();
const express = require('express');
const connectDB = require('../config/db');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

connectDB();

app.use(express.json()); // Middleware to parse JSON bodies

// Test Route
app.get('/', (req, res) => res.send('API Running'));
// Use routes
app.use('/api/auth', authRoutes);
// Use Task routes
app.use('/api/tasks', taskRoutes);

module.exports = app;