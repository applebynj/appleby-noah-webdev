(function() {
    angular
        .module("WamApp")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;

        function init() {
            model.websites = websiteService.findWebsitesForUser(model.userId);
        }
        init();
    }
})();