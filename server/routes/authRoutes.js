const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/dashboard');
    });

    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'public_profile']
    }));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }));

    app.get('/auth/github', passport.authenticate('github'));

    app.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/'}), (req, res) => {
        res.redirect('/dashboard');
    });

    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {failureRedirect: '/'}), (req, res) => {
        res.redirect('/dashboard');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};