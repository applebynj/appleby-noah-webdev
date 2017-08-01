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
            var promise = UserService.findUserById(model.userId);
            promise.then(function(response) {
                model.user = response.data;
            });
        }
        init();

        function updateUser(user) {
            var promise = UserService.updateUser(user._id, user);
            promise.then(function(response) {
                model.user = response.data;
                $location.url("#!/assignment/user/" + model.user._id);
            })
        }

        function deleteUser(user) {
            UserService.deleteUser(user._id);
            $location.url("/login");
        }
    }
})();