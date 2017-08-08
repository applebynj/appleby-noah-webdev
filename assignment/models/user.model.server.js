var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var db = require("./database");
var userModel = mongoose.model("UserModel", userSchema);

//todo all other usermodel things
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
//userModel.deleteUser = deleteUser;
userModel.addWebsite = addWebsite;

module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function updateUser(userId, user) {
    return userModel.update({_id : userId},
        {$set: user});
}

function findUserByUsername(username) {
    return userModel.find({username: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function addWebsite(developerId, websiteId) {
    userModel
        .findById(developerId)
        .then(function(user){
            user.websites.push(websiteId);
            return user.save();
        });
}