const router = require('express').router();
const Login = require('Login');
router.post('./register', (req, res) => {
    Login.findOne ({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            return res.send('This user has already been registered.');
        }
        Login.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }).then(user => {
            req.session.save(() => {
                req.session.user_id = user.user_id;
                res.redirect('/dashboard');
            });
        });
    });
});


router.post('/logged', (req, res) => {
    Login.findOne({
        where: {
            username: req.body.username
        }
    }).then(async (user) => {
        if (!user) {
            return res.redirect('login');
        }
        const validatePass = await user.validatePassword(req.body.password, user.password);
        if (!validatePass) {
            return res.redirect('/login');
        }
        req.session.save(() => {
            req.session.user_id = user.id;
            res.redirect('/dashboard');
        });
    });
});
