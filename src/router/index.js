const express = require("express");
const taskRouter = require("./task.router");
const testRouter = require("./test.router");

const router = express.Router();

router.use("/test", testRouter);
router.use("/tasks", taskRouter);

module.exports = router;
