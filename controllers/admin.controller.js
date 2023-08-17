const fs = require("fs");
const Product = require("../models/products.model");
const config = require("../config/config");
const adminEmail = config.admin.email;
const adminPassword = config.admin.password;

//@desc login admin
//@route POST /api/admin/login
//@access public
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("All field are mendatory !");
    }

    if (email === adminEmail && password === adminPassword) {
      res.status(200).json({
        message: "Login successful!",
      });
    } else {
      res.status(401).json({
        error: "Authetication failed!",
      });
    }
  } catch {
    res.status(401).json({
      error: "Authetication failed!",
    });
  }
};

//@desc Create Product
//@route POST /api/admin/product
//@access public
const createProduct = async (req, res) => {
  try {
    const { product_name, product_price, product_description } = req.body;

    const img = req.file ? req.file.filename : null;

    if (!product_name || !product_price || !product_description || !img) {
      return res.status(400).json("All field are mendatory !");
    }

    const newProduct = new Product({
      product_name,
      product_price,
      product_description,
      product_img: {
        data: fs.readFileSync("uploads/" + img),
        contentType: "image/png",
      },
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Error creating product." });
  }
};

module.exports = {
  adminLogin,
  createProduct,
};
