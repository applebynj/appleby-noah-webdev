(function() {
    angular
        .module("WamApp")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($routeParams, $location, WebsiteService) {
        var model = this;

        model.createWebsite = createWebsite;

        model.userId = $routeParams["uid"];

        function init() {
            model.websites = WebsiteService.findWebsitesByUser(model.userId);
        }
        init();

        function createWebsite(website) {
            website = WebsiteService.createWebsite(model.userId, website);
            $location.url("/user/" + model.userId + "/website");
        }
    }
})();