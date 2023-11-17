const express = require("express");
const ArticleController = require("../controllers/ArticleController");
const fileUpload = require("../middlewares/multer");
const router = express.Router();

router.get("/article", ArticleController.showArticle);
router.post("/article", ArticleController.createArticle);
router.get("/article/:id", ArticleController.showDetails);
router.patch("/article/:id", fileUpload, ArticleController.uploadFile);

module.exports = router;
