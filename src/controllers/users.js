"use strict";
exports.__esModule = true;
exports.setUser = exports.getUsers = exports.users = void 0;
exports.users = [];
function getUsers(request, response) {
    return response.status(200).json(exports.users);
}
exports.getUsers = getUsers;
function setUser(request, response) {
    var user = { id: exports.users.length + 1, name: request.body.name };
    exports.users.push(user);
    return response.status(200).json(user);
}
exports.setUser = setUser;
