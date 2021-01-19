const mongoose = require('mongoose');
const {Schema} = mongoose;

const useSchema = new Schema({
    googleId: String,
    nameGoogle: String,
    credits : {
        type: Number,
        default: 5
    }
});

mongoose.model('users', useSchema);

