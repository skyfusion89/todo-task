// controllers/taskController.js

const User = require('../models/User');
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const user = req.user.email;
    const { title, description, dueDate, status } = req.body;

    const task = new Task({ title, description, dueDate, status, user });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const { page = 1, limit = 10 } = req.query;
    const tasks = await Task.find({ user: userEmail })
                            .limit(limit * 1)
                            .skip((page - 1) * limit)
                            .exec();
    const count = await Task.countDocuments();
    res.json({
      tasks,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTask = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const taskId = req.params.id;
    const task = await Task.findOne({ _id: taskId, user: userEmail });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate(
      { _id: taskId, user: userEmail }, 
      req.body, 
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId, user: userEmail });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
