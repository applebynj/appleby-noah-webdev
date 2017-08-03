(function () {
    angular
        .module("wbdvDirectives", [])
        .controller("directiveController", directiveController)
        .directive("sortable", sortableDirective);

    function sortableDirective() {
        function linkFunction(scope, element) {
            var ul = element.find("ul");
            ul.sortable();
        }
        return {
            templateUrl: 'widget-list.html',
            link: linkFunction
        }
    }

    function directiveController($scope) {

    }
});