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
      this.belongsTo(models.Category, { foreignKey: "categoryId" });
      this.belongsTo(models.Author, { foreignKey: "authorId" });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
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
  Article.beforeCreate((instance, options) => {
    instance.publishDate = new Date().toISOString().split("T")[0];
  });
  return Article;
};
