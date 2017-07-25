(function() {
    angular
        .module("WamApp")
        .controller("EditPageController", EditPageController);

    function EditPageController($routeParams, PageService) {
        var model = this;

        model.pageId = $routeParams["pid"];

        function init() {
            model.page = PageService.findPageById(model.pageId);
        }
        init();
    }
})();