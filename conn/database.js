const Sequelize = require("sequelize");

const DbConnection = function () {
  var dbList = {};
  const getConnection = async (tenantID) => {
    try {
      if (tenantID && dbList[tenantID] && dbList[tenantID] != null) {
        return await dbList[tenantID].sequelize
          .authenticate()
          .then(async () => {
            return dbList[tenantID];
          })
          .catch(async () => {
            console.warn("Connection failed. Getting connection again");
            dbList[tenantID] = null;
            return await getConnection(tenantID);
          });
      } else {
        const _db = {};
        console.log("Initialize connection started: " + Date.now());
        _db.sequelize = new Sequelize("luckydraw", "root", "root", {
          host: "localhost",
          dialect: "mysql",
          define: {
            timestamps: false,
          },
        });
        console.log("Initialize connection connected: " + Date.now());
        dbList[tenantID] = _db;
        return dbList[tenantID];
      }
    } catch (e) {
      console.error("data.connection.js=>getConnection: ", e);
    }
  };

  async function Get(req) {
    const tenantID = req.tenantID || "localhost";
    try {
      console.log("data.connection.js=>Get by tenantID: " + tenantID);
      return await getConnection(tenantID);
    } catch (e) {
      console.error("data.connection.js=>Get by tenantID: " + tenantID, e);
      return e;
    }
  }

  return {
    Get: Get,
  };
};

module.exports = DbConnection();
