const express = require("express");
const authentication = require("../middlewares/authentication");
const authorController = require("../controllers/authorController");
const router = express.Router();

router.post("/login", authorController.login);

router.use(authentication);
router.post("/register", authorController.register);

module.exports = router;
