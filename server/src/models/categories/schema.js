const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.categoriesSchema = new Schema(
  {
    nameCategory: { type: String, required: true, unique: true},
    description: { type: String, required: true },
    icon: { type: String},
    mother: { type: mongoose.ObjectId },
    children: [],
  },
  { collection: 'Categories' }
);
