const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('users');


passport.serializeUser((user,done) => {
    done(null, user.id)
});
passport.deserializeUser((id,done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})
//config google auth
passport.use( new GoogleStrategy({
    clientID: keys.clientGoogleID,
    clientSecret: keys.clientGoogleSecret,
    callbackURL: '/auth/google/callback',
    proxy: true //if our request is a proxy, it's ok
}, async (accessToken, refreshToken, profile, done) => {
 
      const existingUser = await User.findOne({googleId: profile.id});
                if(existingUser){
                    //we already have a record with the given profile ID
                    done(null, existingUser);
                }else{
                    //we do not have a user record with this ID, make a new record
                   const user = await new User({googleId: profile.id, nameGoogle: profile.displayName}).save()
                    done(null,user)
            }
        }
    )
)
