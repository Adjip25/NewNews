const { verifyToken } = require("../helpers/jwt");
const { Author } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const jwtPayload = verifyToken(token);
    const author = await Author.findByPk(jwtPayload.id);

    if (!author) {
      throw new Error("CANNOT FIND AUTHOR");
    }

    req.dataAuthor = {
      id: author.id,
      email: author.email,
    };

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = authentication;
