const express = require("express");
const authentication = require("../middlewares/authentication");
const AuthorController = require("../controllers/AuthorController");
const router = express.Router();

router.post("/login", AuthorController.login);

router.use(authentication);
router.post("/register", AuthorController.register);

module.exports = router;
