const ObjectID = require('mongodb').ObjectID;

const mongoose = require('mongoose');
const schema = require('./schema');

const Categories = mongoose.model('Categories', schema.categoriesSchema);

exports.postAddOne = (data, callBack) => {
  const categories = new Categories(data);
  categories.save(callBack);
}

exports.all = (callBack) => {
  Categories.find({}, callBack);
}

exports.all = (props, callBack) => {
  Categories.find(props, callBack);
}

exports.getOneById = (id, callBack) => {
  Categories.findOne({_id: id}, callBack);
}

exports.updateOne = (id, data, callBack) => {
  Categories.findByIdAndUpdate({_id: id}, data, { new: true }, callBack);
}

exports.deleteOne = (id, callBack) => {
  Categories.deleteOne({_id: id}, callBack);
}
