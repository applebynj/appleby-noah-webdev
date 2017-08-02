(function() {
    angular
        .module("WamApp")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {
        var model = this;

        model.userId = $routeParams['uid'];
        model.websiteId = $routeParams['wid'];

        function init() {
            PageService
                .findPagesByWebsiteId(model.websiteId)
                .then(function(res) {
                    model.pages = res.data;
                });
        }
        init();
    }
})();