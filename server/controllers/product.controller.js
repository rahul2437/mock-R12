const Product = require("../models/product.model");

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return res.status(201).json({
      message: "Product added successfully",
      id: product._id,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
      body_got: req.body,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isBought: false }).select("-__v");
    return res.status(200).json(products);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).select("-_id -__v");
    return res.status(200).json(
      product
    );
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
exports.deleteByID = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    return res.status(203).json({
      message: "Deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
// exports.boiler = async (req, res) => {
//   try {
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Something went wrong", error: error.message });
//   }
// };
