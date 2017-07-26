(function() {
    angular
        .module("WamApp")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var model = this;

        model.userId = $routeParams["uid"];

        function init() {
            model.websites = WebsiteService.findWebsitesByUser(model.userId);
        }
        init();
    }
})();