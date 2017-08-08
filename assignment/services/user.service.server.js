var app = require("../../express");

var userModel = require("../models/user.model.server");

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@wonder.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email:"bob@marley.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email:"charly@garcia.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose@annunzi.com"}
];

app.post("/api/user", createUser);
app.get("/api/user", findUser); /* covers findUserByUserName and findUserByCredentials based on request body */
app.get("/api/user/:userId", findUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser)

function createUser(req, res) {
    /* TODO: further validation */
    var user = req.body;

    userModel
        .createUser(user)
        .then(function(user) {
            res.json(user);
        }, function(err) {
            res.statusCode(404).send(err);
        });

/*    user._id = (new Date()).getTime() +"";
    users.push(user);
    res.send(user);*/
}

function findUser(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    /* findUserByCredentials */
    if(username && password) {

        userModel
            .findUserByCredentials(username, password)
            .then(function(user) {
                res.json(user);
            }, function(err) {
                res.statusCode(404).send(err);
            });


       /* for (var u in users) {
            var _user = users[u];
            if (username === _user.username &&
                password === _user.password) {
                res.send(_user);
                return;
            }
        }*/
    } /* findUserByUserName */
    else if(username) {

        userModel
            .findUserByUsername(username)
            .then(function(user) {
                res.json(user);
            }, function(err) {
                res.statusCode(404).send(err);
            });

        /*for (var u in users) {
            var _user = users[u];
            if (username === _user.username) {
                res.send(_user);
                console.log(_user);
                return;
            }
        }*/
    }
    res.send("0");
}

function findUserById(req, res) {
    var userId = req.params.userId;

    userModel
        .findUserById(userId)
        .then(function(user) {
            res.json(user);
        }, function(err) {
            res.statusCode(404).send(err);
        });

    /*    for(var u in users) {
        if(users[u]._id === req.params.userId) {
            res.send(users[u]);
        }
    }
    res.sendStatus(404);*/
}

function updateUser(req, res) {
    var userId = req.params.userId;
    var user = req.body;

    console.log('here');

    userModel
        .updateUser(userId, user)
        .then(function(status) {
            console.log(status);
            res.json(status);
        }, function(err) {
            res.statusCode(404).send(err);
        })

/*    /!* TODO: finish this logic *!/
    for(var u in users) {
        if(users[u]._id === userId) {
            users[u] = user;
            res.send(user);
            return;
        }
    }
    res.sendStatus(404);*/
}

function deleteUser(req, res) {
    var userId = req.params.userId;

    userModel
        .deleteUser(userId)
        .then(function(status) {
            res.json(status);
        }, function(err) {
            res.statusCode(404).send(err);
        })

/*    for(var u in users) {
        if(users[u]._id === userId) {
            users.splice(u, 1);
            res.sendStatus(204);
            return;
        }
    }
    res.sendStatus(404).send(err);*/
}


/*
 Not needed for assignment:

 app.get("/api/users", getAllUsers);

 function getAllUsers(req, res) {
 res.send(users);
 }
 */