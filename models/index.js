// Initialize Sequelize database
// const dbConfig = require("../config/db.config.js");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/db.config.js")[env];

const Sequelize = require("sequelize");
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    config
  );
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;