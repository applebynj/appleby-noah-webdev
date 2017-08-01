var app = require("../express");

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@wonder.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email:"bob@marley.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email:"charly@garcia.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose@annunzi.com"}
];

/* TODO: replace users with user!*/
app.get("/api/users", getAllUsers);
app.get("/api/user/:userId", getUserById);
app.get("/api/user", findUser);
app.post("/api/user", createUser);
app.put("/api/user/:userId", updateUser);

function getAllUsers(req, res) {
    res.send(users);
}

function getUserById(req, res) {
    for(var u in users) {
        if(users[u]._id === req.params.userId) {
            res.send(users[u]);
        }
    }
}

function findUser(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    if(username && password) {
        for (var u in users) {
            var _user = users[u];
            if (username === _user.username &&
                password === _user.password) {
                res.send(_user);
                return;
            }
        }
    } else if(username) {
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
    return;
}

function createUser(req, res) {
    /* TODO: further validation */
    var user = req.body;
    user._id = (new Date()).getTime() +"";
    users.push(user);
    res.send(user);
    return user;
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