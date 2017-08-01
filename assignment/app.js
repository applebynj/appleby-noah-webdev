var app = require("../express");

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@wonder.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email:"bob@marley.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email:"charly@garcia.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose@annunzi.com"}
];

app.get("/api/users", getAllUsers);

app.get("/api/user/:userId", getUserById);

app.get("/api/user", findUserByCredentials);

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

function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    for (var u in users) {
        var _user = users[u];
        if (username === _user.username &&
            password === _user.password) {
            res.send(_user);
            return;
        }
    }
    res.send("0");
    return;
}