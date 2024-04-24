const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController');
const {protect} = require('../public/middleware/authMiddleware');

// Create User
router.post('/', user_controller.create_user);

// Log In User
router.post('/login', user_controller.login_user);

// Get User Information
router.get('/info', protect, user_controller.get_user);

// Get all Users
router.get('/', user_controller.get_users);

// Update User
router.put('/:id', protect, user_controller.update_user);

// Delete User
router.delete('/:id', user_controller.delete_user);

module.exports = router;
