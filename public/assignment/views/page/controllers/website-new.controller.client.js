(function() {
    angular
        .module("WamApp")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;

        function init() {
            model.websites = websiteService.findWebsitesForUser(model.userId);
        }
        init();
    }
})();