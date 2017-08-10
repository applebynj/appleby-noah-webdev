var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var pageModel = require("./page.model.server");

var widgetModel = mongoose.model("WidgetModel", widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
    widget._page = pageId;
    var widgetTmp = null;
    return widgetModel.create(widget)
        .then(function(widgetDoc) {
            widgetTmp = widgetDoc;
            return pageModel.addWidget(pageId, widgetDoc._id);
        })
        .then(function() {
            return widgetTmp;
        });
}

function findAllWidgetsForPage(pageId) {
    return pageModel.findPageById(pageId)
        .populate('widgets')
        .then(function(page) {
            return page.widgets;
        })
    /* Alternative (doesn't use array, doesnt maintain order)
    return widgetModel.find({_page: pageId});
     */
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.update({_id : widgetId},
        {$set: widget});
}

function deleteWidget(pageId, widgetId) {
    return widgetModel.remove({_id: widgetId})
        .then(function() {
            return pageModel.removeWidget(pageId, widgetId);
        });
}

function reorderWidget(pageId, start, end) {
    return pageModel.findPageById(pageId)
        .then(function(page) {
            var widget = page.widgets[start];
            page.widgets.splice(start, 1);
            var newWidgets = page.widgets.slice(0, end);
            newWidgets.push(widget);
            newWidgets = newWidgets.concat(page.widgets.slice(end));
            page.widgets = newWidgets;
            return pageModel.update({_id: pageId},
                {$set: page});
        });
}