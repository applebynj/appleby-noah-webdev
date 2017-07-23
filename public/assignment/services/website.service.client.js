(function() {
    angular
        .module("WamApp")
        .service("websiteService", websiteService);

    function websiteService() {

        var websites = [
            { "_id" : "123", "name":"Facebook", "developerId":"456", "description":"Lorem"},
            { "_id" : "234", "name":"Twitter", "developerId":"456", "description":"Lorem"},
            { "_id" : "123", "name":"notFacebook", "developerId":"123", "description":"Lorem"},
            { "_id" : "234", "name":"notTwitter", "developerId":"123", "description":"Lorem"},
        ];

        this.findWebsitesForUser = findWebsitesForUser;

        function findWebsitesForUser(userId) {
            var sites = [];

            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    sites.push(websites[w]);
                }
            }
            return sites;
        };
    }
})();