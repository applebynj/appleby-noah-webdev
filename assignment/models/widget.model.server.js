var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var pageModel = require("./page.model.server");

var widgetModel = mongoose.model("WidgetModel", widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
//widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
    widget._page = pageId;
    var widgetTmp = null;
    return widgetModel.create(widget)
        .then(function(widgetDoc) {
            widgetTmp = widgetDoc;
            return pageModel.addWidget(pageId, widgetDoc._id);  //TODO
        })
        .then(function(pageDoc) {
            return widgetTmp; //TODO can this not just go above?
        });
}

function findAllWidgetsForPage(pageId) {
    return widgetModel.find({_page: pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.update({_id : widgetId},
        {$set: widget});
}

function deleteWidget(widgetId) {
    return widgetModel.remove({_id: widgetId});
}