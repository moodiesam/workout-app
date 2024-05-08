const express = require('express');
const router = express.Router();
const exercisetype_controller = require('../controllers/exercisetypeController');
const {protect} = require('../public/middleware/authMiddleware');

// Create an exercisetype
router.post('/', exercisetype_controller.create_exerciseType)

// Get exercisetype Info
router.get('/:id', exercisetype_controller.get_exerciseType)

// Get all exercisetypes
router.get('/', protect, exercisetype_controller.get_exerciseTypes)

// Update an exercisetype
router.put('/:id', exercisetype_controller.update_exerciseType)

// Delete an exercisetype
router.delete('/:id', exercisetype_controller.delete_exerciseType)

module.exports = router;