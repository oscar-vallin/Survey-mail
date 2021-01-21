const mongoose = require('mongoose');
const {Schema} = mongoose;

const useSchema = new Schema({
    googleId: String,
    nameGoogle: String,
    facebookId: String,
    nameFacebook: String,
    image: String,
    email: String,
    credits : {
        type: Number,
        default: 10
    }
});

mongoose.model('users', useSchema);

