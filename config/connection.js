const { Sequelize } = require('sequelize');
require('dotenv').config()

const connection = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize('techblog_db', 'root', '1234',
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
            logging: false
        }
    );

module.exports = connection;