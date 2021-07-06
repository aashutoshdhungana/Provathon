const config = require("../settings");

module.exports = {
  development: {
    username: config.db_username,
    password: config.db_password,
    database: config.db_name,
    host: config.db_host,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
