const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.categoriesSchema = new Schema(
  {
    nameCategory: {
      type: String,
      required: true,
      unique: true,
      minlength: 5, maxlength: 40,
    },
    description: { type: String, required: true, minlength: 5, maxlength: 400, },
    icon: { type: String},
    mother: { type: mongoose.ObjectId },
    children: [],
  },
  { collection: 'Categories' }
);
