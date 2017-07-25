(function() {
    angular
        .module("WamApp")
        .controller("EditPageController", EditPageController);

    function EditPageController($routeParams, $location, PageService) {
        var model = this;

        model.updatePage = updatePage;
        model.deletePage = deletePage;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        function init() {
            model.page = PageService.findPageById(model.pageId);
        }
        init();

        function updatePage(page) {
            PageService.updatePage(model.pageId, page);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
        }

        function deletePage() {
            PageService.deletePage(model.pageId);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
        }
    }
})();