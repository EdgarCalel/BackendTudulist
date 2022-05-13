const { Router } = require("express");
const router = Router();

// importation
const {
  getTodoList,
  postTodoList,
  putTodolist,
  deleteTask,
  completeTodo
} = require("../controllers/TodoList.controller");

// Routes
router.get("/todoList", getTodoList);
router.post("/todoList", postTodoList);
router.put("/todoListU", putTodolist);
router.delete("/todoList", deleteTask);
router.put("/todoList/complete", completeTodo);


module.exports = router;
