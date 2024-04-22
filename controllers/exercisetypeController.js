const ExerciseType = require("../models/exercisetype");
const asyncHandler = require("express-async-handler");

// Create an Exercise Type
exports.create_exerciseType = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Create an Exercise Type" })
})

// Get a Specific Exercise Type
exports.get_exerciseType = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get an Exercise Type" })
})

// Get all Exercise Types
exports.get_exerciseTypes = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all Exercise Types" })
})

// Update an Exercise Type
exports.update_exerciseType = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update an Exercise Type" })
})

// Delete and Exercise Type
exports.delete_exerciseType = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Delete an Exercise Type" })
})