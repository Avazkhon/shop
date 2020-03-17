const categoriesModels = require('../../models/categories');

class Menu {
  constructor() {

  }

  async get (req, res) {
    if (!req.session.user) {
      res.status(401).json({message: 'Пользователь не авторизован!'});
    }
    categoriesModels.all({ level: 1 }, (err, result) => {
      if (err) {
        res.status(500).json(err);
      };
      res.status(200).json(result);
    });
  }
}

module.exports = Menu;
