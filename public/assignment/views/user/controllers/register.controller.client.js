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
            var promise = UserService.findUserByUsername(user.username);
            promise.then(function(res) {
                var _user = res.data;
                if(_user === '0') {
                    if(user.password === user.password2) {
                        var promise2 = UserService.createUser(user);
                        promise2.then(function(res) {
                            _user = res.data;
                            $location.url("/user/" + _user._id);
                        })
                    } else {
                        model.error = "Passwords do not match";
                    }
                }
                else {
                    model.error = "User already exists";
                }
            });
        }
    }
})();