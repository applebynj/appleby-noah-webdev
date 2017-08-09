var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
var websiteModel = require("./website.model.server");

var pageModel = mongoose.model("PageModel", pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
pageModel.addWidget = addWidget;

module.exports = websiteModel;

function createPage(websiteId, page) {
    page._website = websiteId;
    var pageTmp = null;
    return pageModel.create(page)
        .then(function(pageDoc) {
            pageTmp = pageDoc;
            return websiteModel.addPage(websiteId, pageDoc._id);
        })
        .then(function(websiteDoc) {
            return pageTmp; //TODO can this not just go above?
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

function deletePage(pageId) {
    return pageModel.remove({_id: pageId});
}

function addWidget(pageId, widgetId) {
    pageModel
        .findById(pageId)
        .then(function(page){
            page.widgets.push(widgetId);
            return page.save();
        });
}