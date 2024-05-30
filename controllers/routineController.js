const Routine = require("../models/routine");
const asyncHandler = require("express-async-handler");

// Create an Routine
exports.create_routine = asyncHandler(async (req, res) => {
    if(!req.body.title ||
        !req.body.description ||
        !req.body.exercises) {
            res.status(400).json({ message: "Please include all necessary fields." })
            return;
        }

    const newRoutine = await Routine.create({
        title: req.body.title,
        description: req.body.description,
        creater: req.user.id,
        exercises: req.body.exercises,
        duration: req.body.duration,
    })

    res.status(200).json(newRoutine);
})

// Get a Specific Routine
exports.get_routine = asyncHandler(async (req, res) => {
    const routine = await Routine.findById(req.params.id).populate('exercises')

    if(!routine) {
        res.status(400).json({ message: "Routine not found." })
        return;
    }

    res.status(200).json(routine)
})

// Get all Routines
exports.get_routines = asyncHandler(async (req, res) => {
    const routines = await Routine.find();

    if(!routines) {
        res.status(400).json({ message: "No Routines found." })
        return;
    }

    res.status(200).json(routines)
})

// Update an Routine
exports.update_routine = asyncHandler(async (req, res) => {
    const routine = await Routine.findById(req.params.id)

    if(!routine) {
        res.status(400).json({ message: "Routine not found." })
        return;
    }

    const updatedRoutine = await Routine.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.json({ updatedRoutine })
})

// Delete and Routine
exports.delete_routine = asyncHandler(async (req, res) => {
    const routine = await Routine.findById(req.params.id)

    if(!routine) {
        res.status(400).json({ message: "Routine not found." })
        return;
    }

    await Routine.findByIdAndDelete(req.params.id)

    res.status(200).json(req.params.id)
})