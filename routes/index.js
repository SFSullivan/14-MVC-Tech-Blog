const blog_router = require('express').Router();
const api_routes = require('./api_routes')
const homeRoutes = require('./home_routes')
const homePageRoutes = require('./homepage_routes.js')

blog_router.use('/api', api_routes)
blog_router.use('/homepage', homePageRoutes)
blog_router.use('/', homeRoutes)

blog_router.use((req, res) => {
    res.status(404).end();
})

module.exports = blog_router