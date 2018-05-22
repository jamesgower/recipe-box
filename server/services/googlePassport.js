const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                googleID: profile.id
            });
            
            if (existingUser) return done(null, existingUser); //if there is a user, return that user
            
            const user = await new User({
                googleID: profile.id,
                email: profile.emails[0].value,
                name: profile.displayName,
                img: profile.photos[0].value
            }).save();
            done(null, user);
        }
    )
);