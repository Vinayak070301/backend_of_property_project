const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  featured: { type: Boolean, default: false }, // New field to mark featured properties
  description:{type:String,required:true}
});

module.exports = mongoose.model('Property', PropertySchema);
