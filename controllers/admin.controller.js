const product = require("../models/products.model");
const config = require("../config/config");
const adminEmail = config.admin.email;
const adminPassword = config.admin.password;

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

module.exports = {
  adminLogin,
};
