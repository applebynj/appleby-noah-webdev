(function() {
    angular
        .module("WamApp")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;

        function init() {
        }
        init();
    }
})();