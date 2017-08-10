(function() {
    angular
        .module("WamApp")
        .controller("FlickrController", FlickrController);

    function FlickrController($routeParams, FlickrService) {
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
            FlickrService
                .searchPhotos(searchText)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });

        }
    }
})();