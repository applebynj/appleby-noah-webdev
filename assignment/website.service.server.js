var app = require("../express.js");

app.get("/api/user/:userId/website", findWebsitesByUser);
app.post("/api/user/:userId/website", createWebsite);


var websites = [
    { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go", "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem" }
];

function findWebsitesByUser(req, res) {
    /* TODO: check that user exists */
    var userId = req.params.userId;

    var sites = [];

    for(var w in websites) {
        if(websites[w].developerId === userId) {
            sites.push(websites[w]);
        }
    }
    res.json(sites);
}

function createWebsite(req, res) {
    var userId = req.params.userId;
    var website = req.body;

    website.developerId = userId;
    website._id = (new Date()).getTime() +"";
    websites.push(website);
    res.json(website);
}