(function() {
    angular
        .module("WamApp")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($routeParams, $location, WidgetService) {
        var model = this;

        model.createWidget = createWidget;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        function init() {
            model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
        }
        init();

        function createWidget(widgetType) {
            var widget = {};
            widget.widgetType = widgetType;
            widget = WidgetService.createWidget(model.pageId, widget);
            $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget/" + widget._id);
        }
    }
})();