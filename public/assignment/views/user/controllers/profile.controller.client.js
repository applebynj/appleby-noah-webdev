(function() {
    angular
        .module("WamApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($routeParams, UserService) {
        var model = this;
        model.userId = $routeParams["uid"];

        model.updateUser = updateUser;
        model.unregister = unregister;

        function init() {
            model.user = UserService.findUserById(model.userId);
        }
        init();

        function updateUser(user) {
            UserService.updateUser(user._id, user);
        }

        function unregister() {

        }
    }
})();