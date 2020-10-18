const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {   
                name: {
                    type: String,
                    trim: true,
                    required: "Please Enter Exercise Name"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Please Enter Exercise Type"
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                duration: {
                    type: Number,
                    required: "Please Enter Exercise Duration"
                },
                distance: {
                    type: Number
                }
            }
        ]
});

const Workout = mongoose.model("track", workoutSchema);

module.exports = Workout;
