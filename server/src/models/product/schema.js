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
    createTime: { type: Date, default: new Date },
    description: { type: String, required: true, minlength: 5, maxlength: 400, },
    img: { type: String, default: url},
    vendorCode: { type: Number},
    category: {
      idCategory: { type: mongoose.ObjectId, required: true, },
      nameCategory: { type: String, required: true, },
    },
  },
  { collection: 'Product' }
);