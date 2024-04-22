const User = require("../models/user");
const asyncHandler = require("express-async-handler");

// Create a User
exports.create_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Create an User" })
})

// Get a Specific Users
exports.get_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get a User" })
})

// Get all User
exports.get_users = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all Users" })
})

// Update a User
exports.update_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update a User" })
})

// Delete a User
exports.delete_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Delete a User" })
})