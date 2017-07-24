(function() {
    angular
        .module("WamApp")
        .controller("NewPageController", NewPageController);

    function NewPageController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;

        function init() {
            model.websites = websiteService.findWebsitesForUser(model.userId);
        }
        init();
    }
})();