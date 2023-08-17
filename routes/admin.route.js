const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  adminLogin,
  createProduct,
} = require("../controllers/admin.controller");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/login", adminLogin);
router.post("/product", upload.single("product_img"), createProduct);

module.exports = router;
