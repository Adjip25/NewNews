if (process.env.NODE_ENV !== "Production") {
  require("dotenv").config();
}
const express = require("express");
const router = require("./routers");
// const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Pinjam dulu ${port}`);
});
