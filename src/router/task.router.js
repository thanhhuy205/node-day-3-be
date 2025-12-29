const taskController = require("../controller/task.controller");
const express = require("express");

const taskRouter = express.Router();

taskRouter.get("/", taskController.findAll);
taskRouter.get("/:id", taskController.findOne);
taskRouter.post("/", taskController.create);
taskRouter.put("/:id", taskController.update);
taskRouter.delete("/:id", taskController.destroy);

module.exports = taskRouter;
