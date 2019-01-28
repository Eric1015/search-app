const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    short_description: String,
    link: String,
    image: String
});

module.exports = mongoose.model('Item', itemSchema);