const categoriesModels = require('../../models/categories');
const handlier = (err, result, res) => {
  if (err) {
    console.log(err);
    return res.sendStatus(500);
  }
  if (!result) {
    res.status = 404
    return res.send('Категория не найдена!');
  }
  res.status = 200;
  res.send(result);
}

module.exports = (params, res) => {
  if (params.id) {
    categoriesModels.getOneById(params.id, (err, result) => handlier(err, result, res))
  } else {
    categoriesModels.all((err, result) => handlier(err, result, res))
  }
}
