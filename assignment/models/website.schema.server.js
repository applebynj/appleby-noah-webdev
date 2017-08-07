var mongoose = require("mongoose");
var websiteSchema = mongoose.Schema({
    name: String,
    description: String,
    created: {type: Date, default: Date.now}
}, {collection: "website"});
module.exports = websiteSchema;