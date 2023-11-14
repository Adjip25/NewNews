"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category);
      this.belongsTo(models.Author);
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      publishDate: DataTypes.DATE,
      authorId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
