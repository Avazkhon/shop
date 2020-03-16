const productModels = require('../../models/product');
const handlier = (err, result, res) => {
  if (err) {
    console.log(err);
    return res.sendStatus(500);
  }
  if (!result) {
    res.status = 404
    return res.send('Продукт не найдена!');
  }
  res.status = 200;
  res.send(result);
}

module.exports = (params, res) => {
  if (params.id) {
    productModels.getOneById(params.id, (err, result) => handlier(err, result, res))
  } else if (params.idCategory) {
    productModels.getByCategory(params.idCategory, (err, result) => handlier(err, result, res))
  } else {
    productModels.all((err, result) => handlier(err, result, res))
  }
}
