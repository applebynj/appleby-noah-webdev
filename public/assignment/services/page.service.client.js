(function() {
    angular
        .module("WamApp")
        .factory("PageService", PageService);

    function PageService() {

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" }
        ];

        var api = {
            'createPage' : createPage,
            'findPagesByWebsiteId' : findPagesByWebsiteId,
            'findPageById' : findPageById,
            'updatePage' : updatePage,
            'deletePage' : deletePage
        };
        return api;

        function createPage(websiteId, page) {
            /* TODO */
        }

        function findPagesByWebsiteId(websiteId) {
            var returnPages = [];
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    returnPages.push(pages[p]);
                }
            }
            return returnPages;
        }

        function findPageById(pageid) {
            for(var p in pages) {
                if(pages[p]._id === pageid) {
                    return pages[p];
                }
            }
            return null;
        }

        function updatePage(pageid, page) {
            /* TODO */
        }

        function deletePage(pageid) {
            /* TODO */
        }
    }
})();