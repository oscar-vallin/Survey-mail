const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

//our passport
require('./services/passport');

//our routes
require('./routes/authRoutes')(app);
app.listen(port, () => {
    console.log(`PORT ${port}`);
});