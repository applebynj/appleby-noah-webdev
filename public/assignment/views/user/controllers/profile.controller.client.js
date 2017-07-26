(function() {
    angular
        .module("WamApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($routeParams, $location, UserService) {
        var model = this;
        model.userId = $routeParams["uid"];

        model.updateUser = updateUser;

        function init() {
            model.user = UserService.findUserById(model.userId);
        }
        init();

        function updateUser(user) {
            UserService.updateUser(user._id, user);
            $location.url("/");
        }
    }
})();