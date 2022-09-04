const { Model, Datatypes, Sequelize } = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require("./config/connection");
class LoginInfo extends Model {
}
LoginInfo.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'logins',
    hooks: {
        async beforeCreate(logins) {
            const hashpass = await bcrypt.hash(logins.password, 10);
            logins.password = hashpass;
        }
    }
});
LoginInfo.prototype.validatePassword = async function (password, stored_pass) {
    return await bcrypt.compare(password, stored_pass);
};
module.exports = LoginInfo;