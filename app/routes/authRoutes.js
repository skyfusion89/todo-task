// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, showUsers } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', showUsers);

module.exports = router;
