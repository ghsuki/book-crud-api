import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
}, { timestamps: true });

export default mongoose.model("Item", itemSchema);

