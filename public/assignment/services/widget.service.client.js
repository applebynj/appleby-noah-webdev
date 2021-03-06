(function() {
    angular
        .module("WamApp")
        .service("WidgetService", WidgetService);

    function WidgetService($http) {

        this.createWidget = createWidget;
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.findWidgetById = findWidgetById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        function createWidget(pageId, widget) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.post(url, widget);
        }

        function findWidgetsByPageId(pageId) {
            var url = "/api/page/" + pageId + "/widget";
            return $http.get(url);
        }

        function findWidgetById(widgetId) {
            var url = "/api/widget/" + widgetId;
            return $http.get(url);
        }

        function updateWidget(widgetId, widget) {
            var url = "/api/widget/" + widgetId;
            $http.put("/api/page/321/widget?initial=1&final=0");
            return $http.put(url, widget);
        }

        function deleteWidget(pageId, widgetId) {
            var url = "/api/page/" + pageId + "/widget/" + widgetId;
            return $http.delete(url);
        }
    }
})();