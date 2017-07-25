(function() {
    angular
        .module("WamApp")
        .controller("NewPageController", NewPageController);

    function NewPageController($routeParams, $location, PageService) {
        var model = this;

        model.createPage = createPage;

        model.userId = $routeParams['pid'];
        model.websiteId = $routeParams['wid'];

        function init() {
        }
        init();

        function createPage(page) {
            page = PageService.createPage(model.websiteId, page);
            $location.url("/user/" + model.userId + "/website/" + model.websiteId + "/page");
        }
    }
})();