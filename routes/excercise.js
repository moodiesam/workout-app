const express = require('express');
const router = express.Router();
const exercise_controller = require('../controllers/exerciseController');
const {protect} = require('../public/middleware/authMiddleware');

// Create an Exercise
router.post('/', exercise_controller.create_exercise)

// Get Exercise Info
router.get('/:id', exercise_controller.get_exercise)

// Get all Exercises
router.get('/', exercise_controller.get_exercises)

// Update an Exercise
router.put('/:id', exercise_controller.update_exercise)

// Delete an Exercise
router.delete('/:id', exercise_controller.delete_exercise)

module.exports = router;