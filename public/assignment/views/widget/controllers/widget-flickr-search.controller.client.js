(function() {
    angular
        .module("WamApp")
        .controller("FlickrController", FlickrController);

    function FlickrController($routeParams, $location, WidgetService) {
        var model = this;

        model.searchPhotos = searchPhotos;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];
        model.widgetId = $routeParams["wgid"];


        function init() {
        }
        init();

        function searchPhotos(searchText) {
            console.log(searchText);
        }
    }
})();