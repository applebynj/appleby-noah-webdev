(function() {
    angular
        .module("WamApp")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;

        function init() {
            model.websites = websiteService.findWebsitesForUser(model.userId);
        }
        init();
    }
})();