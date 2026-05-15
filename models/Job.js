import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      required: true,
      enum: [
        "Applied",
        "Interview Scheduled",
        "Rejected",
        "Offer Received",
      ],
      default: "Applied",
    },

    location: {
      type: String,
      trim: true,
    },

    salary: {
      type: String,
      trim: true,
    },

    appliedDate: {
      type: String,
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job =
  mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;