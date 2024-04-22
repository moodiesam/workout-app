const Routine = require("../models/routine");
const asyncHandler = require("express-async-handler");

// Create an Routine
exports.create_routine = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Create an Routine" })
})

// Get a Specific Routine
exports.get_routine = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get a Routines" })
})

// Get all Routines
exports.get_routines = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all Routines" })
})

// Update an Routine
exports.update_routine = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update an Routine" })
})

// Delete and Routine
exports.delete_routine = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Delete an Routine" })
})