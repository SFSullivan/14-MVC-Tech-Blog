const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "that's very insightful.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "lol",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "took the words right out of my mouth",
        user_id: 2,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;