import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    title: String,
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", TaskSchema);

