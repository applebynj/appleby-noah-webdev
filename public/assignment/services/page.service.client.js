(function() {
    angular
        .module("WamApp")
        .factory("pageService", pageService);

    function pageService() {

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            'createPage' : createPage,
            'findPagesByWebsiteId' : findPagesByWebsiteId,
            'findPageById' : findPageById,
            'updatePage' : updatePage,
            'deletePage' : deletePage
        };
        return api;

        function createPage(websiteid, page) {
            /* TODO */
        }

        function findPagesByWebsiteId(websiteid) {
            /* TODO */
        }

        function findPageById(pageid) {
            /* TODO */
        }

        function updatePage(pageid, page) {
            /* TODO */
        }

        function deletePage(pageid) {
            /* TODO */
        }
    }
})();