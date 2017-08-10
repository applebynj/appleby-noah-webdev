var app = require("../../express");

var  multer  = require('multer'); // npm install multer --save
var  upload  =  multer ({
    dest: __dirname+'/../../public/uploads'
});

var widgetModel = require("../models/widget.model.server");

app.post("/api/page/:pageId/widget", createWidget);
app.post ("/api/upload",  upload.single('myFile'), uploadImage);
app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.put("/api/page/:pageId/widget", reorderWidget);
app.delete("/api/page/:pageId/widget/:widgetId", deleteWidget);

function createWidget(req, res) {
    var pageId = req.params.pageId;
    var widget = req.body;

    widgetModel
        .createWidget(pageId, widget)
        .then(function(widget) {
            res.json(widget);
        }, function(err) {
            res.statusCode(404).send(err);
        });
}

function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;

    widgetModel
        .findAllWidgetsForPage(pageId)
        .then(function(widgets) {
            res.json(widgets);
        }, function(err) {
            res.statusCode(404).send(err);
        });
}

function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;

    widgetModel
        .findWidgetById(widgetId)
        .then(function(widget) {
            res.json(widget);
        }, function(err) {
            res.statusCode(404).send(err);
        });
}

function updateWidget(req, res) {
    var widgetId = req.params.widgetId;
    var widget = req.body;

    widgetModel
        .updateWidget(widgetId, widget)
        .then(function(status) {
            res.json(status);
        }, function(err) {
            res.statusCode(404).send(err);
        });
}

function reorderWidget(req, res) {
    var pageId = req.params.pageId,
        initial = req.query.initial,
        final = req.query.final;

    widgetModel
        .reorderWidget(pageId, initial, final)
        .then(function(status) {
            res.json(status);
        }, function(err) {
            res.statusCode(404).send(err);
        });
}

function deleteWidget(req, res) {
    var pageId = req.params.pageId;
    var widgetId = req.params.widgetId;

    widgetModel
        .deleteWidget(pageId, widgetId)
        .then(function(status) {
            res.json(status);
        }, function(err) {
            res.statusCode(404).send(err);
        });
}

function  uploadImage (req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var originalname  = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    var widget = {url : '/uploads/'+filename};

    widgetModel.updateWidget(widgetId, widget)
        .then(function() {
            var callbackUrl   = "/assignment/#!/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";
            res.redirect(callbackUrl);
        });
}

