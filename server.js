const express = require('express');
const PORT = process.env.PORT || 3001
const { engine } = require('express-handlebars');
const path = require('path');
const session = require('express-session');
require('dotenv').config();
const StoreSequelize = require('connect-session-sequelize')(session.Store);

const app = express();


const comment_routes = require('./models/routes/CommRoutes');
const view_routes = require('./models/routes/ViewRoutes');
const post_routes = require('./models/routes/PostRoutes')





app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express(static(path.join(__dirname, 'public'))));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,

    store: new StoreSequelize({ db: connection}),
    saveUninitialized: false,
    resave: false,
}))

app.use('/', view_routes);
app.use('/comment', comment_routes);
app.use('/post', post_routes);

connection.sync({ force: falase })
    .then(() => {
        app.listen(PORT, () => {

            console.log(`Listening on port ${PORT}`);
        })
    })