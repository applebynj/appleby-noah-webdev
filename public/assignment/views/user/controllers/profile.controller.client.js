(function() {
    angular
        .module("WamApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($routeParams, $location, UserService) {
        var model = this;

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        model.userId = $routeParams["uid"];

        function init() {
            model.user = UserService.findUserById(model.userId);
        }
        init();

        function updateUser(user) {
            UserService.updateUser(user._id, user);
            $location.url("/");
        }

        function deleteUser(user) {
            UserService.deleteUser(user._id);
            $location.url("/login");
        }
    }
})();