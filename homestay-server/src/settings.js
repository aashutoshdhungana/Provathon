require("dotenv").config();

module.exports = {
  db_name: process.env.DEV_DB_NAME,
  db_host: process.env.DEV_DB_HOST,
  db_username: process.env.DEV_DB_USERNAME,
  db_password: process.env.DEV_DB_PASSWORD,
  secret: process.env.SECRET
};