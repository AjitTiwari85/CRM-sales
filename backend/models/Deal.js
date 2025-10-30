import mongoose from "mongoose";

const dealSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  stage: {
    type: String,
    enum: ["New", "In Progress", "Won", "Lost"],
    default: "New",
  },
  contact: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
}, { timestamps: true });

export default mongoose.model("Deal", dealSchema);
