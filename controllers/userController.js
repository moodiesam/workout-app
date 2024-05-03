const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { token } = require("morgan");

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
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            savedWorkouts: user.savedWorkouts,
            token: generateToken(user.id)
        })
    } else {
        res.status(400).json({ message: "Invalid User Credentials" })
    }
})

// Get a Specific Users
exports.get_user = asyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id);

    res.status(200).json({ id: _id, name, email })
})

// Get all User
exports.get_users = asyncHandler(async (req, res) => {
    // IS THIS NEEDED FOR ADMIN?

    res.status(200).json({ message: "Get all Users" })
})

// Update a User
exports.update_user = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(400).json({ message: "User not found" })
        return;
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {new: true})

    res.json({ updatedUser })
})

// Delete a User
exports.delete_user = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete user with id: ${req.params.id}` })
})