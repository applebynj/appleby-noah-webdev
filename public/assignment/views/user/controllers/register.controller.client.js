(function() {
    angular
        .module("WamApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var model = this;

        model.registerUser = registerUser;

        function init() {

        }
        init();

        function registerUser(user) {
            var _user = UserService.findUserByUsername(user.username);
            if(!_user) {
                user = UserService.createUser(user);
                $location.url("/user/"+user._id);
            }
            else {
                model.error = "User already exists";
            }
        }
    }
})();