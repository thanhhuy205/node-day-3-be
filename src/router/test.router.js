const express = require("express");
const testRouter = express.Router();

testRouter.get("/test-success", (req, res) => {
  return res.success({ message: "Hello World" });
});

testRouter.get("/test-error", (req, res) => {
  throw new Error("Test exception");
});

module.exports = testRouter;
