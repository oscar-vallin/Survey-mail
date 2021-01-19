
const passport = require('passport');

module.exports = app => {

    //auth google
    app.get("/auth/google", passport.authenticate('google', {
        scope: ['profile', 'email'],
    }));
    //callback auth google
    app.get("/auth/google/callback", 
        passport.authenticate('google'),
        (req,res) => {
            res.redirect("/surveys");
        }
        );
        
    //log out
    app.get("/api/logout", (req,res) => {
        req.logout();
        res.redirect("/");
    });

    //show user
    app.get("/api/current_user", (req,res) => {
        res.json(req.user)
    });
}