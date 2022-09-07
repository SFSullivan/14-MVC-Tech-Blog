const express = require('express');
const app = express();
const db = require('./config/connection');
const path = require('path');
const PORT = process.env.PORT || 3333
const {engine} = require('express-handlebars');
const session = require('express-session');
const routes = require('./routes')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({extname: '.hbs'}));

app.set('view engine', 'hbs');

const sess = {
    secret: 'thisisasecret',
    cookie: { maxAge: 36000000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: db
    })
};

app.use(session(sess))
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(routes);

db.sync({force: false})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    })