const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'http://ludinet.fr/medias/uploads/fromage-100x100.jpg';
exports.productSchema = new Schema(
  {
    nameProduct: {
      type: String,
      required: true,
      unique: true,
      minlength: 5, maxlength: 400,
    },
    description: { type: String, required: true, minlength: 5, maxlength: 400, },
    img: { type: String, default: url},
    category: { type: mongoose.ObjectId },
  },
  { collection: 'Categories' }
);
