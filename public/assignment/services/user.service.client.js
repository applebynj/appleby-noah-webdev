(function() {
    angular
        .module("WamApp")
        .factory("UserService", UserService);

    function UserService() {

        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
        ];

        var api = {
            'createUser' : createUser,
            'findUserById' : findUserById,
            'findUserByUsername' : findUserByUsername,
            'findUserByCredentials' : findUserByCredentials,
            'updateUser' : updateUser,
            'deleteUser' : deleteUser
        };
        return api;

        function createUser(user) {
            /* TODO: further validation */
            user._id = (new Date()).getTime() +"";
            users.push(user);
            return user;
        }

        function findUserById(userId) {
            for(var u in users) {
                if(users[u]._id === userId) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for (var u in users) {
                var _user = users[u];
                if (username === _user.username) {
                    return _user;
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                var _user = users[u];
                if (username === _user.username &&
                    password === _user.password) {
                    return _user;
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            /* TODO: finish this logic */
            for(var u in users) {
                if(users[u]._id === userId) {
                    users[u] = user;
                    return
                }
            }
            return null;
        }

        function deleteUser(userId) {
            /* TODO: Implement */
            return null;
        }
    }
})();