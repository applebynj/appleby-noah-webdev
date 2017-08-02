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
            PageService
                .findPagesByWebsiteId(model.websiteId)
                .then(function(res) {
                    model.pages = res.data;
                });
            PageService
                .findPageById(model.pageId)
                .then(function(res) {
                    model.page = res.data;
                });
        }
        init();

        function updatePage(page) {
            PageService
                .updatePage(model.pageId, page)
                .then(function(){
                    $location.url("user/" + model.userId
                        + "/website/" + model.websiteId
                        + "/page");
                });
        }

        function deletePage() {
            PageService
                .deletePage(model.pageId)
                .then(function(){
                    $location.url("user/" + model.userId
                        + "/website/" + model.websiteId
                        + "/page");
                });
        }
    }
})();