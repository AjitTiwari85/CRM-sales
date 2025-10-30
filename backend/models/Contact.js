import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  position: String,
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);
