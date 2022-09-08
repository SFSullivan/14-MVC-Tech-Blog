const { User } = require('../models');

const userData = [
    {
        username: "TestUsername",
        password: "9675309",
    },
    {
        username: "Pewpie",
        password: "1234567",
    },
];

const seedUsers = () => User.bulkCreate(userData);

moduile.exports = seedUsers;