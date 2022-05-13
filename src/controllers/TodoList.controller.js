const axios = require("axios");
const { TodoList } = require("../db");

const getTodoList = async (req, res) => {
  try {
    const todoListAll = await TodoList.findAll({
      where: { stateTask: true  },
    });
    res.json(todoListAll);
  } catch (error) {
    console.log(error);
  }
};

const postTodoList = async (req, res) => {
  try {
    const {  title, description, expirationDate } = req.body;
    const createTodolist = await TodoList.create({
      title,
      description,
      expirationDate,
    });
    await createTodolist.save();
    res.json({ message: "Task create successfully" });
  } catch (error) {
    console.log(error);
  }
};

const putTodolist = async (req, res) => {
  try {    
    const {id} = req.query;
    const { title, description, expirationDate } = req.body;
    console.log("trae", id, title, description, expirationDate)
    await TodoList.update(
      {
        title,
        description,
        expirationDate,
      },
      { where: { id: id } }
    );
    res.json({ message: "Task update successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.query;
    await TodoList.update(
      {
        stateTask: false,
      },
      { where: { id: id } }
    );
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

const completeTodo = async(req, res)=>{
  try {
    const { id } = req.query;
    const {completed} = await TodoList.findOne({
      where: { id: id}
    })
if (completed ===true) {
  await TodoList.update(
    {
      completed: false,
    },
    { where: { id: id } }
  );
}else{
  await TodoList.update(
    {
      completed: true,
    },
    { where: { id: id } }
  );
}
    
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getTodoList, postTodoList, putTodolist, deleteTask, completeTodo };
