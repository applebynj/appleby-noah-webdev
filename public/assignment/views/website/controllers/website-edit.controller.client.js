(function() {
    angular
        .module("WamApp")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, $location, WebsiteService) {
        var model = this;

        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];

        function init() {
            WebsiteService
                .findWebsitesByUser(model.userId)
                .then(function(websites) {
                    model.websites = websites;
                });
            WebsiteService
                .findWebsiteById(model.websiteId)
                .then(function(website) {
                    model.website = website;
                });
        }
        init();

        function updateWebsite(website) {
            WebsiteService
                .updateWebsite(model.websiteId, website)
                .then(function() {
                    $location.url("user/" + model.userId + "/website");
                });
        }

        function deleteWebsite() {
            WebsiteService
                .deleteWebsite(model.userId, model.websiteId)
                .then(function() {
                    $location.url("user/" + model.userId + "/website");
                });
        }
    }
})();