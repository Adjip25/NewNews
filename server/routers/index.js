const express = require("express");
const router = express.Router();
const author = require("./author");
const article = require("./article");
const category = require("./category");

router.use(author);
router.use(article);
router.use(category);

module.exports = router;
