const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
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
    new FacebookStrategy({
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
			profileFields: ['id', 'email', 'displayName', 'photos'],
			proxy: process.env.NODE_ENV !== 'production'
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                facebookID: profile.id
            });
            
            if(existingUser) return done(null, existingUser); 
            
            const user = await new User({
                facebookID: profile.id,
                email: profile.emails[0].value,
                name: profile.displayName,
                img: profile.photos[0].value
            }).save();
            done(null, user);
        }
    )
);