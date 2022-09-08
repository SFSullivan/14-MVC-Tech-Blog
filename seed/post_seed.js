const { Post } = require('../models');

const postData = [
    {
    title: 'HTML',
    content: 'A visit back to our roots.',
    user_id: 1
    },
    {
    title: 'Blogs. Are they still relevant?',
    content: 'Most people just document on social media.',
    user_id: 2
    },
    {
    title: 'Handlebars',
    content: 'I really appreciate that the logo is a mustache.',
    user_id: 2
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;