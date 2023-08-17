const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      required: [true, "Please add the product name"],
    },
    product_price: {
      type: String,
      required: [true, "Please add the product price"],
    },
    product_description: {
      type: String,
      required: [true, "Please add the product description"],
    },
    product_img: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
