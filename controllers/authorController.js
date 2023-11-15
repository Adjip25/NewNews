class AuthorController {
  static async register(req, res, next) {
    try {
      const { username, email, password, role } = req.body;
      const newUser = { username, email, password, role };
      const response = await User.create(newUser);
      if (!response) {
        throw new Error("CREATE NEW USER FAILED");
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
    } catch (error) {}
  }
}

module.exports = AuthorController;
