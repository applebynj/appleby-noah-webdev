(function() {
    angular
        .module("WamApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($routeParams, userService) {
        var model = this;
        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.unregister = unregister;

        function init() {
            model.user = userService.findUserById(userId);
        }
        init();

        function updateUser(user) {
            userService.updateUser(user._id, user);
        }

        function unregister() {

        }
    }
})();