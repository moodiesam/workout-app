const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    savedWorkouts: [{ type: Schema.Types.ObjectId, ref: "Routine" }],
});

module.exports = mongoose.model("User", UserSchema);