(function() {
    angular
        .module("WamApp")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($routeParams, WidgetService) {
        var model = this;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];
        model.widgetId = $routeParams["wgid"];


        function init() {
            model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
            model.widget = WidgetService.findWidgetById(model.widgetId);
        }
        init();
    }
})();