(function() {
    angular
        .module("WamApp")
        .service("FlickrService", FlickrService);

    function FlickrService($http) {

        var key = "0cdc444d22342e8a1af5610cb36d7c58";
        var secret = "c7c97fa4b5b46281";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

        var api = {
            'searchPhotos' : searchPhotos,
        };
        return api;

        function searchPhotos(searchTerm) {
            var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
            return $http.get(url);
        }

    }
})();