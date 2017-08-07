var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
var userModel = require("user.model.server");

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsitesForUser = findWebsitesForUser;

module.exports = websiteModel;

function createWebsite(developerId, website) {
    website.developer = developerId;
    var websiteTmp = null;
    return websiteModel.create(website)
        .then(function(websiteDoc) {
            websiteTmp = websiteDoc;
            return userModel.addWebsite(developerId, websiteDoc._id);
        })
        .then(function(userDoc) {
            return websiteTmp; //TODO can this not just go above?
        });
}

function findWebsitesForUser(developerId) {
    return websiteModel.find({developer: developerId});
}