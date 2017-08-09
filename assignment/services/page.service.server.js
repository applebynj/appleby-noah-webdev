var app = require("../../express");

var pageModel = require("../models/page.model.server");

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Lorem" }
];

app.post("/api/website/:websiteId/page", createPage);
app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
app.get("/api/page/:pageId", findPageById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/page/:pageId", deletePage);


function createPage(req, res) {
    var websiteId = req.params.websiteId;
    var page = req.body;

    pageModel
        .createPage(websiteId, page)
        .then(function(page) {
            res.json(page);
        }, function(err) {
            res.statusCode(404).send(err);
        });

/*    page.websiteId = websiteId;
    page._id = (new Date()).getTime() +"";
    pages.push(page);
    res.json(page);*/
}

function findAllPagesForWebsite(req, res) {
    var websiteId = req.params.websiteId;

    pageModel
        .findAllPagesForWebsite(websiteId)
        .then(function(pages) {
            res.json(pages);
        }, function(err) {
            res.statusCode(404).send(err);
        });

    /*var returnPages = [];
    for(var p in pages) {
        if(pages[p].websiteId === websiteId) {
            returnPages.push(pages[p]);
        }
    }
    res.json(returnPages);*/
}

function findPageById(req, res) {
    var pageId = req.params.pageId;

    pageModel
        .findPageById(pageId)
        .then(function(page) {
            res.json(page);
        }, function(err) {
            res.statusCode(404).send(err);
        });

 /*   for(var p in pages) {
        if(pages[p]._id === pageId) {
            res.json(pages[p]);
            return;
        }
    }
    res.sendStatus(404);*/
}

function updatePage(req, res) {
    var pageId = req.params.pageId;
    var page = req.body;

    pageModel
        .updatePage(pageId, page)
        .then(function(status) {
            res.json(status);
        }, function(err) {
            res.statusCode(404).send(err);
        });

/*    for(var p in pages) {
        if(pages[p]._id === pageId) {
            pages[p] = page;
            res.json(pages[p]);
            return;
        }
    }
    res.send("0");*/
}

function deletePage(req, res) {
    var pageId = req.params.pageId;

    pageModel
        .deletePage(pageId)
        .then(function(status) {
            res.json(status);
        }, function(err) {
            res.statusCode(404).send(err);
        });

/*    for(var p in pages) {
        if(pages[p]._id === pageId) {
            pages.splice(p, 1);
            res.sendStatus(204);
            return;
        }
    }
    res.sendStatus(404);*/
}
