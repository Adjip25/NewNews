const express = require("express");
const AuthorController = require("../controllers/AuthorController");
const router = express.Router();

router.post("/login", AuthorController.login);

router.post("/register", AuthorController.register);

module.exports = router;
