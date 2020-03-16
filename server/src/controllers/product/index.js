const productModels = require('../../models/product');
const categoriesModels = require('../../models/categories');
const getProducts = require('./getProducts');

const addChildrenCategory = (product) => {
  categoriesModels.updateOne(product.category.idCategory, { $push: { children: product._id } }, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
}
exports.getProducts = (req, res) => {
  const { id, all, idCategory } = req.query;
  const params = (id && {id})
    || (all === 'true' && {all})
    || idCategory && { idCategory };
  try {
    return getProducts(params, res);
  }
  catch (err) {
    return res.status(500).json({ message: 'Все плохо!', e});
  }
};

exports.postAddOne = (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ message: 'Пользователь не авторизован!'});
  };
  let { body } = req;
  try {
    productModels.postAddOne(body,
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Все плохо!', err});
        };
        addChildrenCategory(result);
        res.status(201).json(result);
      }
    )
  }
  catch(e) {
    return res.status(500).json({ message: 'Все плохо!', e});
  }
}


exports.updateOne = (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ message: 'Пользователь не авторизован!'});
  };

  const { id } = req.query;
  const { body } = req;
  try {
    productModels.updateOne(id, body, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Все плохо!', err});
      }
      res.status(200).json(result);
    });
  }
  catch(e) {
    return res.status(500).json({ message: 'Все плохо!', e});
  }
}

exports.deleteOne = (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ message: 'Пользователь не авторизован!'});
  };

  const { id } = req.query;
  try {
    productModels.deleteOne(id, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Все плохо!', err});
      }
      if (result.deletedCount) {
        return res.status(200).json({ message: 'Продукт успешно удален!'});
      }
      res.status(400).json({ message: 'Нет продукта с таким id!'});
    });
  }
  catch(e) {
    return res.status(500).json({ message: 'Все плохо!', e});
  }
}
