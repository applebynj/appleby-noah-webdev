var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var userModel = require("./user.model.server");

var websiteModel = mongoose.model("WebsiteModel", websiteSchema);

websiteModel.createWebsite = createWebsite;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.addPage = addPage;
websiteModel.removePage = removePage;

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

function findAllWebsitesForUser(userId) {
    return websiteModel.find({_user: userId});
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
    return websiteModel.update({_id : websiteId},
        {$set: website});
}

function deleteWebsite(userId, websiteId) {
    return websiteModel.remove({_id: websiteId})
        .then(function() {
            return userModel.removeWebsite(userId, websiteId);
        });
}

function addPage(websiteId, pageId) {
    websiteModel
        .findById(websiteId)
        .then(function(website){
            website.pages.push(pageId);
            return website.save();
        });
}

function removePage(websiteId, pageId) {
    websiteModel
        .findById(websiteId)
        .then(function(website){
            var index = website.pages.indexOf(pageId);
            website.pages.splice(index, 1);
            return website.save();
        });
}