const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
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

passport.use(new TwitterStrategy({
    consumerKey: keys.twitterClientID,
    consumerSecret: keys.twitterClientSecret,
    callbackURL: process.env.NODE_ENV === 'production' ? 'https://recipebox-io.herokuapp.com/auth/twitter/callback' : 'http://localhost:3000/auth/twitter/callback',
}, async(accessToken, refreshToken, profile, done) => {
    console.log(JSON.stringify(profile, null, 2));    
    const existingUser = await User.findOne({twitterID: profile.id});
    if (existingUser) return done(null, existingUser); //if there is a user, return that user
    const largerImage = profile.photos[0].value.replace(/_normal/g, '');
    const user = await new User({twitterID: profile.id, email: profile.email || 'undefined', name: profile.displayName, img: largerImage }).save();
    done(null, user);
}));

