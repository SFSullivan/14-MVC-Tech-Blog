const { Model, Sequelize } = require("sequelize");
const sequelize = require("./config/connection");
const Login = require("./Login");
class Post extends Model {
}
Post.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Login',
            key: 'id'
        }
    }
}, {
    sequelize,
    underscored: true,
    modelName: "post"
});
Login.hasMany(Post);
Post.belongsTo(Login);
module.exports = Post;