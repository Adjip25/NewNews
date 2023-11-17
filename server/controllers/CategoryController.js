const { Category } = require("../models");

class CategoryController {
  static async creatCategory(req, res, next) {
    try {
      const { categoryName } = req.body;
      const newCategory = { categoryName };
      const response = await Category.create(newCategory);
      if (!response) {
        throw new Error("CREATE NEW CATEGORY FAILED");
      }
      res.status(200).json({
        msg: `Category id ${response.id} successfully created`,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = CategoryController;
