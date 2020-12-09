const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

const app = express();

//get body parser
app.use(bodyParser.json());

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
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    //Express will server up production assets
    //like our main.js file, or main.css file
    app.use(express.static('client/build'));

    //Express will server up the index.html file
    //I fit does not reconize the route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
app.listen(port, () => {
    console.log(`port on ${port}`);
});