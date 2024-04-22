const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutineSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creater: { type: Schema.Types.ObjectId, ref: "User" },
    exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise", required: true }],
    duration: { type: String }
})

// Vitual for Exercise Type's URL
RoutineSchema.virtual("url").get(function () {
    return `/api/routine/${this._id}`;
})

//Export Model
module.exports = mongoose.model("Routine", RoutineSchema);