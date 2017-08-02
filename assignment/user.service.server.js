var app = require("../express");

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@wonder.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email:"bob@marley.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email:"charly@garcia.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose@annunzi.com"}
];

app.post("/api/user", createUser);
app.get("/api/user", findUser); /* covers findUserById and findUserByCredentials based on request body */
app.get("/api/user/:userId", findUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser)

function createUser(req, res) {
    /* TODO: further validation */
    var user = req.body;
    user._id = (new Date()).getTime() +"";
    users.push(user);
    res.send(user);
    return user;
}

function findUser(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    /* findUserByCredentials */
    if(username && password) {
        for (var u in users) {
            var _user = users[u];
            if (username === _user.username &&
                password === _user.password) {
                res.send(_user);
                return;
            }
        }
    } /* findUserById */
    else if(username) {
        for (var u in users) {
            var _user = users[u];
            if (username === _user.username) {
                res.send(_user);
                console.log(_user);
                return;
            }
        }
    }
    res.send("0");
}

function findUserById(req, res) {
    for(var u in users) {
        if(users[u]._id === req.params.userId) {
            res.send(users[u]);
        }
    }
}

function updateUser(req, res) {
    var userId = req.params.userId;
    var user = req.body;

    /* TODO: finish this logic */
    for(var u in users) {
        if(users[u]._id === userId) {
            users[u] = user;
            res.send(user);
            return;
        }
    }
    res.sendStatus(404);
}

function deleteUser(req, res) {
    var userId = req.params.userId;

    for(var u in users) {
        if(users[u]._id === userId) {
            users.splice(u, 1);
            res.sendStatus(204);
            return;
        }
    }
    res.sendStatus(404);
}


/*
 Not needed for assignment:

 app.get("/api/users", getAllUsers);

 function getAllUsers(req, res) {
 res.send(users);
 }
 */