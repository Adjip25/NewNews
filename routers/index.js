const express = require("express");
const router = express.Router();
const author = require("./author");
const article = require("./article");

router.use(author);
router.use(article);

module.exports = router;
