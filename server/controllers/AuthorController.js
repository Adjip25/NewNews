const { compareHash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { Author } = require("../models");

class AuthorController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const newAuthor = { username, email, password };
      const response = await Author.create(newAuthor);
      if (!response) {
        throw new Error("CREATE NEW AUTHOR FAILED");
      }
      res.status(200).json({
        msg: `User id ${response.id} successfully created`,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Please input email/password");
      }

      const user = await Author.findOne({
        where: { email },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const isValidPassword = compareHash(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid email/password");
      }

      const accessToken = signToken({ id: user.id, role: user.role });
      res.status(200).json({ token: accessToken });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = AuthorController;
