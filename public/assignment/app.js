var app = angular.module("WamApp", ["ngRoute"]);

app.controller("loginController", loginController);
app.controller("profileController", profileController);


app.config(configuration);

function configuration($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "login.html"
        })
        .when("/register", {
            templateUrl: "register.html"
        })
        .when("/profile/:userId", {
            templateUrl: "profile.html"
        })
}

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

function loginController($scope, $location) {

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    $scope.login = function(user) {
        for(var u in users) {
            var _user = users[u];
            if(user.username === _user.username &&
            user.password === _user.password) {
                $location.url("profile/" + _user._id);
            }
        }
        $scope.errorMessage = "User not found";
    }
}

function profileController($scope, $routeParams) {
    var userId = $routeParams["userId"];
    for(var u in users) {
        if(users[u]._id === userId) {
            $scope.user = users[u];
        }
    }
}