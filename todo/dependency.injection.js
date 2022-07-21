const TodoRepository = require("./repository");
const TodoService = require("./service");

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);

module.exports = {
  todoService,
};
