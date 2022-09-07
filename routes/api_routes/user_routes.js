const blog_router = require('express').Router()
const {User, Post, Comment} = require('../../models');

blog_router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password']},
        });
        res.json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
});

blog_router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({
            attributes: { exclude: ["password"] },
            where: {
                id: req.params.id,
            },
            include: [
              {
                model: Post,
                attributes: ["id", "title", "content", "created_at"],
              },

              {
                model: Comment,
                attributes: ["id", "comment_text", "created_at"],
                include: {
                  model: Post,
                  attributes: ["title"],
                },
              },
              {
                model: Post,
                attributes: ["title"],
              },
            ],
        });
        if (!userData) {
            res.status(404).json({ message: "No user with that id was found." });
            return;
        }
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

blog_router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!userData) {
            res.status(404).json({ message: "No user with that is was found." });
            return;
        }

        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

blog_router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        console.log(req.session)
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.password = userData.password;
            req.session.loggedIn = true;

            res.json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

blog_router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => { res.status(204).end() })
    } else {
        res.status(404).end()
    }
});

module.exports = blog_router;