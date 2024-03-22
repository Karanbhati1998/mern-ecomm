const express = require("express");
// ZQS7AdglpTCigeXO
const productController = require("../controller/product");
const productRouter = express.Router();
productRouter
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .post("/", productController.createProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

exports.router = productRouter;
