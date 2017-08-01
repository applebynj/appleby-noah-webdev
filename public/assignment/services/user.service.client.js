(function() {
    angular
        .module("WamApp")
        .factory("UserService", UserService);

    function UserService($http) {

        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice@wonder.com"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email:"bob@marley.com"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email:"charly@garcia.com"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose@annunzi.com"}
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
            return $http.post('/api/user', user);
        }

        function findUserById(userId) {
            return $http.get("/api/user/" + userId);
        }

        function findUserByUsername(username) {
            return $http.get("/api/user/?username=" + username);
        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;
            return $http.get(url);
        }

        function updateUser(userId, user) {
            var url ="/api/user/" + userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {
            for(var u in users) {
                if(users[u]._id === userId) {
                    users.splice(u, 1);
                }
            }
            return null;
        }
    }
})();