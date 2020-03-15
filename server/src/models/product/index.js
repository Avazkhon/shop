const ObjectID = require('mongodb').ObjectID;

const mongoose = require('mongoose');
const schema = require('./schema');

const Product = mongoose.model('Product', schema.productSchema);

exports.postAddOne = (data, callBack) => {
  const product = new Product(data);
  product.save(callBack);
}

exports.all = (callBack) => {
  Product.find({}, callBack);
}

exports.getOneById = (id, callBack) => {
  Product.findOne({_id: id}, callBack);
}

exports.updateOne = (id, data, callBack) => {
  Product.findByIdAndUpdate({_id: id}, data, { new: true }, callBack);
}

exports.deleteOne = (id, callBack) => {
  Product.deleteOne({_id: id}, callBack);
}
