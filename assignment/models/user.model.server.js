var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var db = require("./database");
var userModel = mongoose.model("UserModel", userSchema);

//todo all other usermodel things
userModel.createUser = createUser;
//findUserById
//updateUser
//findUserByCredentials
userModel.addWebsite = addWebsite;

module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}

function addWebsite(developerId, websiteId) {
    userModel
        .findById(developerId)
        .then(function(user){
            user.websites.push(websiteId);
            return user.save();
        });
}