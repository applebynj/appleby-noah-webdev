(function () {
    angular
        .module("wbdvDirectives", [])
        .directive("wbdvSortable", wbdvSortableTag);

    function wbdvSortableTag($http, $routeParams) {
        function moveWidget(scope, element) {
            var startIndex = -1;
            var endIndex = -1;
            var pageId = $routeParams['pid'];
            $(element).sortable({
                axis: "y",
                start: function (event, ui) {
                    startIndex = $(ui.item).index();
                },
                stop: function (event, ui) {
                    endIndex = $(ui.item).index();
                    $http.put("/api/page/" + pageId + "/widget?initial="+startIndex+"&final="+endIndex);
                }
            });
        }
        return {
            link: moveWidget
        };
    }
})();