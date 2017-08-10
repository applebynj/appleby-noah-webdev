(function() {
    angular
        .module("WamApp")
        .controller("FlickrController", FlickrController);

    function FlickrController($routeParams, $location, FlickrService, WidgetService) {
        var model = this;

        model.searchPhotos = searchPhotos;
        model.selectPhoto = selectPhoto;

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

         function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
             WidgetService
                .updateWidget(model.widgetId, {url: url})
                .then(function() {
                    $location.url("user/" + model.userId
                        + "/website/" + model.websiteId
                        + "/page/" + model.pageId
                        + "/widget/" + model.widgetId);
                });
        }

    }
})();