import mongoose from "mongoose";

// TO DO add uniqueness and email validations to email fields

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("User", schema);
