const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

const app = express();

//add cookie 
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;

//mongo connect
const db = async () => {
    await mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
};
db();

//our routes
require('./routes/authRoutes')(app);
app.listen(port, () => {
    console.log(`PORT ${port}`);
});