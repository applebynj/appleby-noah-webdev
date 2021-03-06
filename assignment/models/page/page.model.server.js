var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
var websiteModel = require("../website/website.model.server");

var pageModel = mongoose.model("PageModel", pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
pageModel.addWidget = addWidget;
pageModel.removeWidget = removeWidget;

module.exports = pageModel;

function createPage(websiteId, page) {
    page._website = websiteId;
    var pageTmp = null;
    return pageModel.create(page)
        .then(function(pageDoc) {
            pageTmp = pageDoc;
            return websiteModel.addPage(websiteId, pageDoc._id);
        })
        .then(function() {
            return pageTmp;
        });
}

function findAllPagesForWebsite(websiteId) {
    return pageModel.find({_website: websiteId});
}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}

function updatePage(pageId, page) {
    return pageModel.update({_id : pageId},
        {$set: page});
}

function deletePage(websiteId, pageId) {
    return pageModel.remove({_id: pageId})
        .then(function() {
            return websiteModel.removePage(websiteId, pageId);
        });
}

function addWidget(pageId, widgetId) {
    pageModel
        .findById(pageId)
        .then(function(page){
            page.widgets.push(widgetId);
            return page.save();
        });
}

function removeWidget(pageId, widgetId) {
    pageModel
        .findById(pageId)
        .then(function(page){
            var index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index, 1);
            return page.save();
        });
}