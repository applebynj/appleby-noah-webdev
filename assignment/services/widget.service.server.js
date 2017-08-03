var app = require("../../express");

var  multer  = require('multer'); // npm install multer --save
var  upload  =  multer ({
    dest: __dirname+'/../../public/uploads'
});

var widgets = [
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

app.post("/api/page/:pageId/widget", createWidget);
app.post ("/api/upload",  upload.single('myFile'), uploadImage);
app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.put("/api/page/:pageId/widget", updateWidgetOrder);
app.delete("/api/widget/:widgetId", deleteWidget);

function createWidget(req, res) {
    var pageId = req.params.pageId;
    var widget = req.body;

    widget.pageId = pageId;
    widget._id = (new Date()).getTime() +"";
    widgets.push(widget);
    res.json(widget);
}

function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;

    var returnWidgets = [];

    for(var w in widgets) {
        if(widgets[w].pageId === pageId) {
            returnWidgets.push(widgets[w]);
        }
    }
    res.json(returnWidgets);
}

function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;

    for(var w in widgets) {
        if(widgets[w]._id === widgetId) {
            res.json(widgets[w]);
            return;
        }
    }
    res.sendStatus(404);
}

function updateWidget(req, res) {
    var widgetId = req.params.widgetId;
    var widget = req.body;

    for(var w in widgets) {
        if(widgets[w]._id === widgetId) {
            widgets[w] = widget;
            res.json(widgets[w]);
            return;
        }
    }
    res.send("0");
}

function updateWidgetOrder(req, res) {
    var pageId = req.params.pageId,
        initial = req.query.initial,
        final = req.query.final;

    var widget,
        widgetsInitial, widgetsFinal;

    if(initial !== final) {
        for (var i = 0; i < widgets.length; i++) {
            var w = widgets[i];
            if (w.pageId === pageId) {
                i += "";
                /*req query var comes back as string type?*/
                if (i === initial) {
                    widgetsInitial = i;
                    widget = w;
                } else if (i === final) {
                    widgetsFinal = i;
                }
            }
        }
        if (widget) {
            widgets.splice(widgetsInitial, 1);
            var newWidgets = widgets.slice(0, widgetsFinal);
            newWidgets.push(widget);
            newWidgets = newWidgets.concat(widgets.slice(widgetsFinal));
            widgets = newWidgets;
            /*res.sendStatus(404);*/
            res.send("moved");
            return;
        }
    } else {
        res.send("no move");
    }
    res.sendStatus(404);
}

function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;

    for(var w in widgets) {
        if(widgets[w]._id === widgetId) {
            widgets.splice(w, 1);
            res.sendStatus(204);
            return;
        }
    }
    res.sendStatus(404);
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

    widget = getWidgetById(widgetId);
    widget.url = '/uploads/'+filename;

    var callbackUrl   = "/assignment/#!/user/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";
    res.redirect(callbackUrl);
}

function getWidgetById(widgetId) {
    for(var w in widgets) {
        if(widgets[w]._id === widgetId) {
            return widgets[w];
        }
    }
}