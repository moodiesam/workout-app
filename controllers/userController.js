const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '3d',
    })
}

// Create a User
exports.create_user = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Please include username and password" })
        return;
    }

    const emailExists = await User.findOne({email});

    if (emailExists) {
        res.status(400).json({ message: "Username already exists" })
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({ message: "Invalid User Data" })
    };
})

// Log In User
exports.login_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Log In User" })
})

// Get a Specific Users
exports.get_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get user with id: ${req.params.id}` })
})

// Get all User
exports.get_users = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all Users" })
})

// Update a User
exports.update_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update user with id: ${req.params.id}` })
})

// Delete a User
exports.delete_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete user with id: ${req.params.id}` })
})