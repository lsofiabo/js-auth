const express = require('express');
const router = express.Router();

// ================================================================

const User = require('../class/user').User;

router.get('/signup', function (req, res) {
    res.render('signup', {
        name: 'signup',
        component: [],

        title: 'Sign Up',

        data: {
            role: [
                { value: User.USER_ROLE.USER, text: 'Користувач' },
                { value: User.USER_ROLE.ADMIN, text: 'Адміністратор' },
                { value: User.USER_ROLE.DEVELOPER, text: 'Розробник' },
            ],
        },
    });
});

module.exports = router;
