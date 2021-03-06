(function() {
    angular
        .module("WamApp")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, $sce, WidgetService) {
        var model = this;

        model.trustHtmlContent = trustHtmlContent;
        model.trustUrlResource = trustUrlResource;
        model.getWidgetIncludeUrl = getWidgetIncludeUrl;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        function init() {
            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(function(res) {
                    model.widgets = res.data;
                });
        }
        init();

        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent); /* temporary */
        }

        function trustUrlResource(url) {
            var youtubeUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split('/');
            youtubeUrl += urlParts[urlParts.length -1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }

        function getWidgetIncludeUrl(widgetType) {
            return 'views/widget/templates/components/widget-' + widgetType.toLowerCase() + '.component.client.html';
        }
    }
})();