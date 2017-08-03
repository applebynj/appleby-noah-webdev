(function() {
    angular
        .module("WamApp")
        .service("WebsiteService", WebsiteService);

    function WebsiteService($http) {

        this.createWebsite = createWebsite;
        this.findWebsitesByUser = findWebsitesByUser;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        function createWebsite(userId, website) {
            var url = "/api/user/" + userId + "/website";
            return $http.post(url, website)
                .then(function(res) {
                    return res.data;
                });
        }

        function findWebsitesByUser(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url)
                .then(function(res) {
                    return res.data;
                });
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url)
                .then(function(res) {
                    return res.data;
                });
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/" + websiteId;
            return $http.put(url, website);
        }

        function deleteWebsite(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.delete(url);
        }
    }
})();