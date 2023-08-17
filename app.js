require("./config/db");
const express = require("express");
const app = express();
const cors = require("cors");
const adminRouter = require("./routes/admin.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/admin", adminRouter);

module.exports = app;
