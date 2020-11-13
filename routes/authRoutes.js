const { authenticate } = require('passport');
const passport = require('passport');

module.exports = app => {
    app.get("/", (req,res) => {
        res.json({"name": "Karina"});
    });

    //auth google
    app.get("/auth/google", passport.authenticate('google', {
        scope: ['profile', 'email'],
    }));
    //callback auth google
    app.get("/auth/google/callback", passport.authenticate('google'));

    //auth facebook
    app.get("/auth/facebook", passport.authenticate('facebook'))
    //callback auth facebook
    app.get("/auth/facebook/callback", passport.authenticate('facebook'));
}