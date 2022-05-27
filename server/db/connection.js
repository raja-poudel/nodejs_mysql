const { Sequelize } = require("sequelize");

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        logging: false,
    }
);

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (e) {
        console.error("Unable to connect to database: ", e);
    }
}
checkConnection();

module.exports = { sequelize }