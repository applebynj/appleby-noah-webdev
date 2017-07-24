(function() {
    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
        //Website Routes
            .when("/user/:uid/website", {
                templateUrl: "website/templates/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/new", {
                templateUrl: "website/templates/website-new.view.client.html",
                controller: "websiteNewController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "website/templates/website-edit.view.client.html",
                // controller: "",
                controllerAs: "model"
            })
        //Page Routes
            .when("/user/:uid/website/:wid/page", {
                templateUrl: "website/templates/page-list.view.client.html",
                // controller: "",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "website/templates/page-new.view.client.html",
                // controller: "",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "website/templates/page-edit.view.client.html",
                // controller: "",
                controllerAs: "model"
            })
        //Widget Routes
            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "website/templates/widget-list.view.client.html",
                // controller: "",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "website/templates/widget-new.view.client.html",
                // controller: "",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "website/templates/widget-edit.view.client.html",
                // controller: "",
                controllerAs: "model"
            })
        //Default Route
            .otherwise({
                templateUrl: "user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
    }
})();