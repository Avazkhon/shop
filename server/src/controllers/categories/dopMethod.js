const mongoose = require('mongoose');
const categoriesModels = require('../../models/categories');
exports.addChildren = (result) => {
  const data = { $push: { children: {idCategory: result._id, nameCategory: result.nameCategory }}};
  categoriesModels.updateOne(result.mother._id, data, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.deleteChildren = (category) => {
  categoriesModels.getOneById(category.oldIdMoather, function(err, result) {
    if (err) {
      console.log(err);
    };
    result.children = result.children.filter((itm) => {
      return String(itm.idCategory) !== String(category._id)
    })
    categoriesModels.updateOne(result._id, result, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  });
}

exports.remoteAndAddChildren = async (result, body) => {
  await exports.deleteChildren(body);
  await exports.addChildren(result);
}
