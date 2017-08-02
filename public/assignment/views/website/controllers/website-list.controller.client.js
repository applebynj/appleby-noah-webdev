(function() {
    angular
        .module("WamApp")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var model = this;

        model.userId = $routeParams["uid"];

        function init() {
            WebsiteService
                .findWebsitesByUser(model.userId)
                .then(function(websites) {
                    model.websites = websites;
                });
        }
        init();
    }
})();