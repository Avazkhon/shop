const categoriesModels = require('../../models/categories');

class Menu {
  constructor() {

  }

  async get (req, res) {
    if (!req.session.user) {
      res.status(401).json({message: 'Пользователь не авторизован!'});
    }
    categoriesModels.all({}, (err, result) => {
      if (err) {
        res.status(500).json(err);
      };
      // const menu = {}
      // const free = result.filter(itm => +itm.level === 3);
      // const two = result.filter(itm => +itm.level === 2);
      // const one = result.filter(itm => +itm.level === 1);
      // console.log(free.map((itm) => itm.mother ));
      res.status(200).json(result);
    });
  }
}

module.exports = Menu;
