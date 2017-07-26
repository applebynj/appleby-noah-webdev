(function() {
    angular
        .module("WamApp")
        .controller("WidgetListController", NewWidgetController);

    function NewWidgetController($routeParams, WidgetService) {
        var model = this;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        function init() {
            model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
        }
        init();
    }
})();