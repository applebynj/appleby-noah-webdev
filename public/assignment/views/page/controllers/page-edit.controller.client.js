(function() {
    angular
        .module("WamApp")
        .controller("EditPageController", EditPageController);

    function EditPageController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;

        function init() {
            model.websites = websiteService.findWebsitesForUser(model.userId);
        }
        init();
    }
})();