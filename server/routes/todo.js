const express = require("express");
const { Todo } = require("../models");

const router = express.Router();

//기본주소: localhost:PORT/

//GET localhost:PORT/todos - show all todos (READ)
router.get("/todos", async (req, res) => {
  try {
    let todos = await Todo.findAll();

    console.log(todos);
    res.send(todos);
  } catch (err) {
    res.send(err);
  }

  //밑 줄의 코드와 같다.
  // Todo.findAll().then((data) => {
  //     console.log(data);
  //     res.send(data);
  // }).catch로 예외처리;
});

//POST localhost: PORT/todo - create a new todo (CREATE)
router.post("/todo", async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      //done: req.body.done, - 안해줘도 된다. //기본값 0.
    });

    console.log(newTodo);
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
