const mongoose = require("mongoose");

//creating a Schema using mongoose as mongodb has no type restriction within a single collection
const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
      trim: true,
      maxlength: [20, "please enter less than 20 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    creatorId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

//creating a model called Task and passing the created TaskSchema and exporting it
module.exports = mongoose.model("Task", TaskSchema);
