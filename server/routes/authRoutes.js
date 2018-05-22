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
        successRedirect: 'https://recipebox-io.herokuapp.com/dashboard',
        failureRedirect: 'https://recipebox-io.herokuapp.com/'
    }));
});

app
.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app
.get('/api/current_user', (req, res) => {
    res.send(req.user);
});
};