const { Sequelize } = require('sequelize');
require('dotenv').config();

const connection = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            host: 'localhost',
            dialect: 'mysql',
            logging: false
        }
    );

    try {
        const connect = async () => await connection.authenticate();
        connect();
        console.log('connection was successful');
    }catch (err) {
        console.log(err);
    }

    module.exports = connection;