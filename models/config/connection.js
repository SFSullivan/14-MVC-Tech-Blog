const { Sequelize } = require('sequelize');
require('dotenv').config();
const connect = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.send.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    });
try {
    const toConnect = async() => await connect.authenticate();
    toConnect();
    console.log('Connection worked')
}
catch (error) {
    console.log(error);
}

module.exports = connect