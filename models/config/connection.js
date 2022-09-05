const { Sequelize } = require('sequelize');
require('dotenv').config();
const connect = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    });
try {
    const connect = async () => await connect.authentication();
    connect();
    console.log('connection successful');
}
catch (error) {
    console.log(error);
}



module.exports = connect;