"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Article);
    }
  }
  Author.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  Author.beforeCreate((instance, options) => {
    instance.password = hashPassword(instance.password);
  });
  return Author;
};
