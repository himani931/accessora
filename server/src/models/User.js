import mongoose from "mongoose";

const accessibilitySchema = new mongoose.Schema({
  disabilityType: [String],
  fontScale: {
    type: String,
    default: "normal",
  },
  contrast: {
    type: String,
    default: "normal",
  },
  voiceNavigation: {
    type: Boolean,
    default: false,
  },
  captions: {
    type: Boolean,
    default: true,
  },
  signLanguage: {
    type: Boolean,
    default: false,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: String,

    provider: {
      type: String,
      default: "local",
    },

    accessibility: accessibilitySchema,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
