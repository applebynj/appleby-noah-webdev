(function() {
    angular
        .module("WamApp")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($routeParams, $location, WidgetService) {
        var model = this;

        model.getWidgetIncludeUrl = getWidgetIncludeUrl;
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];
        model.widgetId = $routeParams["wgid"];


        function init() {
            model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
            model.widget = WidgetService.findWidgetById(model.widgetId);
        }
        init();

        function getWidgetIncludeUrl(widgetType) {
            return 'views/widget/templates/editors/widget-' + widgetType + '-edit.component.client.html';
        }

        function updateWidget(widget) {
            WidgetService.updateWidget(model.widgetId, widget);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
        }

        function deleteWidget() {
            WidgetService.deleteWidget(model.widgetId);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
        }
    }
})();