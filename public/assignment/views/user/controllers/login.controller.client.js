(function() {
    angular
        .module("WamApp")
        .controller("LoginController", LoginController)

    function LoginController($location, UserService, $rootScope) {
        var model = this;

        model.login = login;

        function init() { }
        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
            }
            var promise  = UserService.findUserByCredentials(user.username, user.password);
            promise.then(function(res){
                user = res.data;
                if(user === '0') {
                    model.errorMessage = "User not found";
                } else {
                    $rootScope.currentUser = user;
                    $location.url("user/" + user._id);
                }
            });
        }
    }
})();