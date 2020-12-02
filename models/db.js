const mongoose = require('mongoose');
const shortId = require('shortid'); 

const dbSchema = new mongoose.Schema({
    longurl : {
        type :String,
        required : true
    },
    short : {
        type : String,
        required : true,
        default : shortId.generate
    }
});

const schemaModel = mongoose.model("UrlShrinker",dbSchema);

module.exports = schemaModel;