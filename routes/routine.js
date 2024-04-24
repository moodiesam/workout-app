const express = require('express');
const router = express.Router();
const routine_controller = require('../controllers/routineController');
const {protect} = require('../public/middleware/authMiddleware');

// Create a routine
router.post('/', protect, routine_controller.create_routine)

// Get routine Info
router.get('/:id', routine_controller.get_routine)

// Get all routines
router.get('/', routine_controller.get_routines)

// Update a routine
router.put('/:id', protect, routine_controller.update_routine)

// Delete a routine
router.delete('/:id', protect, routine_controller.delete_routine)

module.exports = router;