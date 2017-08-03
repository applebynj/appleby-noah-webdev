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
            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(function(res) {
                    model.widgets = res.data;
                });
        }
        init();

        function createWidget(widgetType) {
            var widget = {};
            widget.widgetType = widgetType;
            WidgetService
                .createWidget(model.pageId, widget)
                .then(function(res) {
                    widget = res.data;
                    $location.url("/user/" + model.userId + "/website/"
                        + model.websiteId + "/page/" + model.pageId
                        + "/widget/" + widget._id);
                })
        }
    }
})();