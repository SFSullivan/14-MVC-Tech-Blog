const router = require('express').Router();
const Comment = require('Comments');


router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        req.session.comment_id = comment.id;
        res.redirect('/dashboard');
    } catch(error) {
        res.status(400).json(err);
    }
});

module.exports = router;