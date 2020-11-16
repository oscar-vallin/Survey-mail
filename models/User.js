const mongoose = require('mongoose');
const {Schema} = mongoose;

const useSchema = new Schema({
    googleId: String,
    nameGoogle: String,
    facebookId: String,
    nameFacebook: String
});

mongoose.model('users', useSchema);

