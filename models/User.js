const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db_connection')
const bcrypt = require('bcrypt')
const { createHook } = require('async_hooks')

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt, compareSync(loginPW, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwords: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
    }, {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(
                updatedUserData.password,
                10
            );
            return updatedUserData;
        },
    },
    sequelize,
    timestamps: false,
    freexeTableName: true,
    underscored: true,
    modelName: 'user'
}

)