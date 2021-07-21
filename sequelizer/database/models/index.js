'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const db = {};

let sequelize;

//sequelize = new Sequelize('mysql://root:e1ZyC7k1lN0Z@mysql:3306/ChoosePlans');

sequelize = new Sequelize('ChoosePlans', 'root', 'e1ZyC7k1lN0Z', {
  host: 'localhost',
  //"host": "172.28.0.3",
  // port: 3306,
  dialect: 'mysql'
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
