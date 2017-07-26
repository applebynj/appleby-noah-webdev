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
            model.websites = WebsiteService.findWebsitesByUser(model.userId);
            model.website = WebsiteService.findWebsiteById(model.websiteId);
        }
        init();

        function updateWebsite(website) {
            WebsiteService.updateWebsite(model.websiteId, website);
            $location.url("user/" + model.userId + "/website");
        }

        function deleteWebsite() {
            WebsiteService.deleteWebsite(model.websiteId);
            $location.url("user/" + model.userId + "/website");
        }
    }
})();