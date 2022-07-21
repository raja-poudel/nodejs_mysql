const dbConnection = require("../conn/database");

class TodoService {
  db = async (req) => {
    const connection = await dbConnection.Get(req);
    connection.todo = require("./model")(connection.sequelize);
    return connection.todo;
  };
  create = async (req) => {};
  findAll = async (req) => {};
  findById = async (req) => {};
  update = async (req) => {};
  delete = async (req) => {};
}
module.exports = TodoService;
