(function() {
    angular
        .module("WamApp")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($routeParams, $location, WebsiteService) {
        var model = this;

        model.createWebsite = createWebsite;

        model.userId = $routeParams["uid"];

        function init() {
            WebsiteService
                .findWebsitesByUser(model.userId)
                .then(function(websites) {
                    model.websites = websites;
                });
        }
        init();

        function createWebsite(website) {
            if(website !== undefined) {
                WebsiteService
                    .createWebsite(model.userId, website)
                    .then(function() {
                        $location.url("/user/" + model.userId + "/website");
                    });
            }
            else{
                model.error = "Invalid website configuration.";
            }
        }
    }
})();