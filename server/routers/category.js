const express = require("express");
const CategoryController = require("../controllers/categoryController");
const router = express.Router();

router.post("/category", CategoryController.creatCategory);

module.exports = router;
