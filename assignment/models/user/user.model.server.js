var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var db = require("../models.server");

var userModel = mongoose.model("UserModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.addWebsite = addWebsite;
userModel.removeWebsite = removeWebsite;

module.exports = userModel;

function createUser(user) {
    user.username = user.username.toLowerCase();
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({username: username.toLowerCase()});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username.toLowerCase(), password: password});
}

function updateUser(userId, user) {
    return userModel.update({_id : userId},
        {$set: user});
}

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}

function addWebsite(userId, websiteId) {
    userModel
        .findById(userId)
        .then(function(user){
            user.websites.push(websiteId);
            return user.save();
        });
}

function removeWebsite(userId, websiteId) {
    userModel
        .findById(userId)
        .then(function(user){
            var index = user.websites.indexOf(websiteId);
            user.websites.splice(index, 1);
            return user.save();
        });
}

