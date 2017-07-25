(function() {
    angular
        .module("WamApp")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var model = this;

        model.websiteId = $routeParams['wid'];

        function init() {
            model.pages = PageService.findPagesByWebsiteId(model.websiteId);
        }
        init();
    }
})();