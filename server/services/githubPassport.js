const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(new GithubStrategy({
    clientID: keys.githubClientID,
    clientSecret: keys.githubClientSecret,
    callbackURL: '/auth/github/callback',
    proxy: process.env.NODE_ENV !== 'production'
}, async(accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({githubID: profile.id});

    if (existingUser) 
        return done(null, existingUser); //if there is a user, return that user
    
    const user = await new User({githubID: profile.id, email: profile.emails[0].value, name: profile.displayName, img: profile.photos[0].value}).save();
    done(null, user);
}));