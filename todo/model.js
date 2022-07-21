const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const todo = sequelize.define(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      name: "todos",
      updatedAt: false,
      createdAt: false,
    }
  );
  return todo;
};
