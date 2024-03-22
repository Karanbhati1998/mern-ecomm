const fs = require("fs");
const mongoose = require("mongoose");
const model = require("../model/products");
const Product = model.product;
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await model.product.findById(id);
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const data = await product.save();
    0;
    res.status(201).json(data);
  } catch (error) {
    console.log({ error });
    res.status(400).json(error);
  }
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(200).json(error);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(200).json(error);
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(200).json({ "deleted Product": product });
  } catch (error) {
    res.status(400).json({ error });
  }
};
