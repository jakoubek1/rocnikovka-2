const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  stockQuantity: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.models.Item || mongoose.model('Item', itemSchema);
