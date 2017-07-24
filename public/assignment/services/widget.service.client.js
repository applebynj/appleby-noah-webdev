(function() {
    angular
        .module("WamApp")
        .service("widgetService", widgetService);

    function widgetService() {

        var websites = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        1. createWidget(pageId, widget)  - adds the  widget  parameter instance to the local  widgets  array. The new widget's  pageId  is set to the  pageId  parameter
        2. findWidgetsByPageId(pageId)  - retrieves the widgets in local  widgets  array whose  pageId  matches the parameter  pageId
        3. findWidgetById(widgetId)  - retrieves the widget in local  widgets  array whose  _id  matches the  widgetId parameter
        4. updateWidget(widgetId, widget)  - updates the widget in local  widgets  array whose  _id  matches the widgetId  parameter
        5. deleteWidget(widgetId)  - removes the widget from local  widgets  array whose  _id  matches the  widgetId parameter

        this.createWidget = createWidget;
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.findWidgetById = findWidgetById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        function createWidget(pageId, widget) {
            /* TODO */
        }

        function findWidgetsByPageId(pageId) {
            /* TODO */
        }

        function findWidgetById(widgetId) {
            /* TODO */
        }

        function updateWidget(widgetId, widget) {
            /* TODO */
        }

        function deleteWidget(widgetId) {
            /* TODO */
        }
    }
})();