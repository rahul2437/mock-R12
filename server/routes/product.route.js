const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProductById,
  deleteByID,
} = require("../controllers/product.controller");
const productRoute = express.Router();

productRoute.get("/", getAllProducts);
productRoute.get("/:id", getProductById);
productRoute.delete("/:id", deleteByID);
productRoute.post("/post", addProduct);
module.exports = productRoute;
