const Exercise = require("../models/exercise");
const asyncHandler = require("express-async-handler");

// Create an Exercise
exports.create_exercise = asyncHandler(async (req, res) => {
    if(!req.body.title || 
        !req.body.exerciseType ||
        !req.body.description ||
        !req.body.focusArea ||
        !req.body.instructions) {
            res.status(400).json({ message: "Please include all necessary fields." })
            return;
        }

    const newExercise = await Exercise.create({
        title: req.body.title,
        exerciseType: req.body.exerciseType,
        description: req.body.description,
        focusArea: req.body.focusArea,
        instructions: req.body.instructions,
        tips: req.body.tips,
    })

    res.status(200).json({ newExercise });
})

// Get a Specific Exercises
exports.get_exercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if(!exercise) {
        res.status(400).json({ message: "Exercise not found." })
        return;
    }

    res.status(200).json(exercise)
})

// Get all Exercises
exports.get_exercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find().populate("exerciseType");

    if(!exercises) {
        res.status(400).json({ message: "No exercises found." })
        return;
    }

    res.status(200).json(exercises)
})

// Update an Exercise
exports.update_exercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if(!exercise) {
        res.status(400).json({ message: "Exercise not found." })
        return;
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json({ updatedExercise })
})

// Delete an Exercise
exports.delete_exercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if(!exercise) {
        res.status(400).json({ message: "Exercise not found." })
        return;
    }

    await Exercise.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: `Exercise: ${exercise.title}... has been deleted.` })
})