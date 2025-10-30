import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  company: String,
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);
