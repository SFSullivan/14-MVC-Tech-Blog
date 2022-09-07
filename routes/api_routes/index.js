const blog_router = require('express').Router();
const userRoutes = require('./user_routes');
const commentRoutes = require('./comment_routes');
const postRoutes = require('./post_routes');

blog_router.use('/users', userRoutes);
blog_router.use('/posts', postRoutes);
blog_router.use('/comments', commentRoutes);

module.exports = blog_router