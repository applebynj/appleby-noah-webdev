(function() {
    angular
        .module("WamApp")
        .controller("LoginController", LoginController)

    function LoginController($location, userService) {
        var model = this;

        model.login = login;

        function init() { }
        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
            }
            user = userService.findUserByUsernameAndPassword(user.username, user.password);
            if(user === null) {
                model.errorMessage = "User not found";
            } else {
                $location.url("profile/" + user._id);
            }
        }
    }
})();