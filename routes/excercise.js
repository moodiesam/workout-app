const express = require('express');
const router = express.Router();
const exercise_controller = require('../controllers/exerciseController');
const {protect} = require('../public/middleware/authMiddleware');

// Create an Exercise
router.post('/', protect, exercise_controller.create_exercise)

// Get Exercise Info
router.get('/:id', protect, exercise_controller.get_exercise)

// Get all Exercises
router.get('/', protect, exercise_controller.get_exercises)

// Get all Exercises of a given Type
router.get('/type/:id', protect, exercise_controller.get_exercises_type)

// Update an Exercise
router.put('/:id', exercise_controller.update_exercise)

// Delete an Exercise
router.delete('/:id', exercise_controller.delete_exercise)

module.exports = router;