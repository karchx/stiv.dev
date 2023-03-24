import { model, Document, Schema } from "mongoose";
import { Project } from "interfaces/projects.interface";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    github: {
      type: String,
      required: true,
      trim: true
    },
    tags: [
      {
        type: String,
        default: "programming"
      }
    ],
    web: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: "uploads/default.png"
    }
  },
  { timestamps: true }
);

const projectModel = model<Project & Document>("Project", projectSchema);

export default projectModel;
