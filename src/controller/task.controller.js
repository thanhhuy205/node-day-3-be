const taskModel = require("../models/task.model");

class TaskController {
  async findAll(req, res) {
    const tasks = await taskModel.findAll();
    return res.success(tasks);
  }

  async findOne(req, res) {
    const task = await taskModel.findOne(req.params.id);
    if (!task) return res.error(404, "Task không tồn tại");
    return res.success(task);
  }

  async create(req, res) {
    const { title } = req.body;
    if (!title) return res.error(409, "Title là bắt buộc");

    const task = await taskModel.create({ title });
    return res.success(task, 201);
  }

  async update(req, res) {
    const affectedRows = await taskModel.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.error(404, "Task không tồn tại hoặc không có thay đổi");
    }

    return res.success({ updated: affectedRows });
  }

  async destroy(req, res) {
    const affectedRows = await taskModel.destroy(req.params.id);

    if (affectedRows === 0) return res.error(404, "Task không tồn tại");

    return res.success({ deleted: affectedRows });
  }
}

const taskController = new TaskController();
module.exports = taskController;
