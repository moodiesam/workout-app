const Exercise = require("../models/exercise");
const asyncHandler = require("express-async-handler");

// Create an Exercise
exports.create_exercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Create an Exercise" })
})

// Get a Specific Exercises
exports.get_exercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get an Exercise" })
})

// Get all Exercise
exports.get_exercises = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all Exercises" })
})

// Update an Exercise
exports.update_exercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update an Exercise" })
})

// Delete an Exercise
exports.delete_exercise = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Delete an Exercise" })
})