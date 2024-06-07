const ExerciseType = require("../models/exercisetype");
const Exercise = require("../models/exercise");
const asyncHandler = require("express-async-handler");

// Create an Exercise Type
exports.create_exerciseType = asyncHandler(async (req, res) => {
    if(!req.body.title) {
        res.status(400).json({ message: "Please include a title for this type of exercise." })
        return;
    }

    if(!req.body.description) {
        res.status(400).json({ message: "Please include a description of this type of exercise." })
        return;
    }

    const newExerciseType = await ExerciseType.create({
        title: req.body.title,
        description: req.body.description
    })

    res.status(200).json({ newExerciseType })
})

// Get exercises for a Specific Exercise Type
exports.get_exerciseType = asyncHandler(async (req, res) => {
    const [ exerciseType, allExercises] = await Promise.all([
        ExerciseType.findById(req.params.id),
        Exercise.find({ exerciseType: req.params.id }).populate("exerciseType")
    ])

    if (!exerciseType) {
        res.status(400).json({ message: "Exercise Type not found." })
        return;
    }

    res.status(200).json({exerciseType, allExercises})
})

// Get all Exercise Types
exports.get_exerciseTypes = asyncHandler(async (req, res) => {
    const exerciseTypes = await ExerciseType.find();

    if(!exerciseTypes) {
        res.status(400).json({ message: "No Exercise Types found." })
        return;
    }

    res.status(200).json(exerciseTypes)
})

// Update an Exercise Type
exports.update_exerciseType = asyncHandler(async (req, res) => {
    const exerciseType = await ExerciseType.findById(req.params.id)

    if(!exerciseType) {
        res.status(400).json({ message: "Exercise Type not found." })
        return;
    }

    const updatedExerciseType = await ExerciseType.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.json({ updatedExerciseType })
})

// Delete and Exercise Type
exports.delete_exerciseType = asyncHandler(async (req, res) => {
    // Will need to figure out how to deal with exercises that reference type
    
    const exerciseType = await ExerciseType.findById(req.params.id)

    if(!exerciseType) {
        res.status(400).json({ message: "Exercise Type not found." })
        return;
    }

    await ExerciseType.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `Exercise Type: ${exerciseType.title}... has been deleted.` })
})