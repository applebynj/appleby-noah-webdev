var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
var userModel = require("./user.model.server");

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function createWebsite(userId, website) {
    website._user = userId;
    var websiteTmp = null;
    return websiteModel.create(website)
        .then(function(websiteDoc) {
            websiteTmp = websiteDoc;
            return userModel.addWebsite(userId, websiteDoc._id);
        })
        .then(function(userDoc) {
            return websiteTmp; //TODO can this not just go above?
        });
}

function findWebsitesForUser(userId) {
    return websiteModel.find({_user: userId});
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
    return websiteModel.update({_id : websiteId},
        {$set: website});
}

function deleteWebsite(websiteId) {
    return websiteModel.remove({_id: websiteId});
}