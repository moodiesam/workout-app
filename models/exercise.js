const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
    title: { type: String, required: true },
    exerciseType: { type: Schema.Types.ObjectId, ref: "ExerciseType", required: true },
    description: { type: String, required: true },
    focusArea: { type: String, required: true },
    instructions: { type: String, required: true },
    tips: { type: String }
})

// Vitual for Exercise Type's URL
ExerciseSchema.virtual("url").get(function () {
    return `/api/exercise/${this._id}`;
})

//Export Model
module.exports = mongoose.model("Exercise", ExerciseSchema);