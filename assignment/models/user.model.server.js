var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var db = require("./database");
var userModel = mongoose.model("UserModel", userSchema);

//todo all other usermodel things
//createUser
//findUserById
//updateUser
//findUserByCredentials
userModel.addWebsite = addWebsite;

module.exports = userModel;

function addWebsite(developerId, websiteId) {
    userModel
        .findById(developerId)
        .then(function(user){
            user.websites.push(websiteId);
            return user.save();
        });
}