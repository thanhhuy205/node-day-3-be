const pool = require("../config/database");

class TaskModel {
  async findAll() {
    const [rows] = await pool.query(
      "SELECT * FROM tasks ORDER BY created_at DESC"
    );
    return rows;
  }
  async findOne(id) {
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return rows.length ? rows[0] : null;
  }

  async create(taskData) {
    const { title } = taskData;
    const completed = false;
    const [result] = await pool.query(
      "INSERT INTO tasks (title, completed) VALUES (?, ?)",
      [title, completed]
    );
    return {
      id: result.insertId,
      title,
      completed,
    };
  }

  async update(id, taskData) {
    const fields = [];
    const values = [];

    if (taskData.title !== undefined) {
      fields.push("title = ?");
      values.push(taskData.title);
    }

    if (taskData.completed !== undefined) {
      fields.push("completed = ?");
      values.push(taskData.completed);
    }

    if (!fields.length) return 0;

    const [result] = await pool.query(
      `UPDATE tasks SET ${fields.join(", ")} WHERE id = ?`,
      [...values, id]
    );

    return result.affectedRows;
  }
  async destroy(id) {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    return result.affectedRows;
  }
}

const taskModel = new TaskModel();
module.exports = taskModel;
