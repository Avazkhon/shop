const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.userSchema = new Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { collection: 'Users' }
);
