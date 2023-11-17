const { Cloudinary } = require("../API/cloudinary");
const { Article } = require("../models");

class ArticleController {
  static async createArticle(req, res, next) {
    try {
      const { title, imgUrl, content, publishDate, authorId, categoryId } =
        req.body;
      const newArticle = {
        title,
        imgUrl,
        content,
        publishDate,
        authorId,
        categoryId,
      };
      const response = await Article.create(newArticle);
      if (!response) {
        throw new Error("CREATE NEW ARTICLE FAILED");
      }
      res.status(200).json({
        msg: `Article id ${response.id} successfully created`,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async showArticle(req, res, next) {
    try {
      const articles = await Article.findAll();
      res.send(200).json({ articles });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async showDetails(req, res, next) {
    try {
      const { id } = req.params;
      const article = await Article.findByPk(id);
      if (!article) {
        throw new Error("ARTICLE NOT FOUND");
      }
      res.status(200).json({ article });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async uploadFile(req, res, next) {
    try {
      const { id } = req.params;
      const article = await Article.findByPk(id);
      if (!article) {
        throw new Error("Article not found");
      }

      if (!req.file) {
        throw new Error("Image file cannot be empty");
      }

      const image = await Cloudinary.uploader.upload(req.file.path, {
        upload_preset: "upload_file",
      });

      if (!image) {
        throw new Error("Image not found");
      }

      const imgUrl = image.url;

      const updatedFile = await Article.update(
        {
          imgUrl,
        },
        {
          where: { id },
          returning: true,
        }
      );
      // console.log(updatedUser);
      res.status(200).json({
        message: "Image updated successfully",
        data: updatedFile,
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      next(error);
    }
  }
}

module.exports = ArticleController;
