const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: [true, "this title alredy exits"],
  },
  description: String,
  price: {
    type: Number,
    min: [0, "wrong min rating"],
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: [0, "wrong min price"],
    max: [100, "wrong max price"],
  },
  rating: {
    type: Number,
    required: true,
    min: [0, "wrong min rating"],
    max: [10, "wrong max rating"],
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: String,
});

exports.product = mongoose.model("product", productSchema);
