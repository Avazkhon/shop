const categoriesModels = require('../../models/categories');
const getCategories = require('./getCategories');
const dopMethod = require('./dopMethod');

exports.getCategories = (req, res) => {
  const { id, all } = req.query;
  const params = (id && {id}) || (all === 'true' && {all});
  try {
    return getCategories(params, res);
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
    categoriesModels.postAddOne(body,
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Все плохо!', err});
        };
        if (+result.level !== 1) {
          dopMethod.addChildren(result);
        }
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
    categoriesModels.updateOne(id, body, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Все плохо!', err});
      };
      dopMethod.remoteAndAddChildren(result, body);
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
    categoriesModels.deleteOne(id, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Все плохо!', err});
      }
      if (result.deletedCount) {
        return res.status(200).json({ message: 'Категория успешна удалина!'});
      }
      res.status(400).json({ message: 'Нет категории с таким id!'});
    });
  }
  catch(e) {
    return res.status(500).json({ message: 'Все плохо!', e});
  }
}
