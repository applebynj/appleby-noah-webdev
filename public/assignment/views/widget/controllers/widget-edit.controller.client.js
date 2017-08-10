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
            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(function(res) {
                    model.widgets = res.data;
                });
            WidgetService.
                findWidgetById(model.widgetId)
                .then(function(res) {
                    model.widget = res.data;
                })
        }
        init();

        function getWidgetIncludeUrl(widgetType) {
            /* Wait for widget to be received */
            if(widgetType) {
                return 'views/widget/templates/editors/widget-' + widgetType.toLowerCase() + '-edit.component.client.html';
            }
        }

        function updateWidget(widget) {
            WidgetService
                .updateWidget(model.widgetId, widget)
                .then(function() {
                    $location.url("user/" + model.userId
                        + "/website/" + model.websiteId
                        + "/page/" + model.pageId + "/widget");
                });
        }

        function deleteWidget() {
            WidgetService
                .deleteWidget(model.pageId, model.widgetId)
                .then(function() {
                    $location.url("user/" + model.userId
                        + "/website/" + model.websiteId
                        + "/page/" + model.pageId + "/widget");
                });
        }
    }
})();