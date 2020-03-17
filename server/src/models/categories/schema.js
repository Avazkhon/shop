const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.categoriesSchema = new Schema(
  {
    nameCategory: {
      type: String,
      required: true,
      unique: true,
      minlength: 3, maxlength: 20,
    },
    level: { type: String, required: true },
    createTime: { type: Date, default: new Date },
    description: { type: String, required: true, minlength: 5, maxlength: 400 },
    icon: { type: String },
    mother: { type: mongoose.ObjectId },
    children: [{
      idCategory: { type: mongoose.ObjectId },
      nameCategory: { type: String, },
    }],
  },
  { collection: 'Categories' }
);
