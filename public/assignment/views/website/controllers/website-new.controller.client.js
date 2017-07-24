(function() {
    angular
        .module("WamApp")
        .controller("websiteNewController", websiteNewController);

    function websiteListController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;

        function init() {
            model.websites = websiteService.findWebsitesForUser(model.userId);
        }
        init();
    }
})();