(function() {
    angular
        .module("WbdvProject")
        .controller("PlaceController", PlaceController)

    function PlaceController($routeParams, GooglePlaceService, PlaceService) {
        var model = this;

        model.userId = $routeParams["uid"];
        model.placeId = $routeParams["pid"];

        function init() {
            GooglePlaceService
                .findPlaceById(model.placeId)
                .then(function(response) {
                    model.place = response.data.result;
                    PlaceService
                        .createPlace({  //if doesnt exist!!! TODO
                            name : model.place.name,
                            address : model.place.formatted_address,
                            place_id : model.place.place_id
                        }).then(function(place) {
                            model.place.id = place.id;
                            PlaceService
                                .findAllPlacesForUser(model.userId)
                                .then(function(res) {
                                    console.log(res);
                                })
                    });
                });
        }
        init();
    }
})();