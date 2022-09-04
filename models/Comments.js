const { Model, Sequelize } = require('sequelize');
const Post = require('./Posts');
const User = require('./Login');
class Comment extends Model {
}
const sequelize = require('./config/connection');
Comment.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    post_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Post',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});
Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Comment);
Comment.belongsTo(User);
module.exports = Comment;