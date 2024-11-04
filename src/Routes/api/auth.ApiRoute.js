const express = require("express");
const { Router } = express;
const { ApiResponse } = require("../../Utilies/ApiResponse.js");
const _ = Router();
_.route("/getname").get((req, res) => {
  res
    .status(200)
    .json(new ApiResponse(true, "Mern2306", false, "Everythings is ok"));
});
module.exports = _;
