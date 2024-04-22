const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseTypeSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true }
})

// Vitual for Exercise Type's URL
ExerciseTypeSchema.virtual("url").get(function () {
    return `/api/exercisetype/${this._id}`;
})

//Export Model
module.exports = mongoose.model("ExerciseType", ExerciseTypeSchema);