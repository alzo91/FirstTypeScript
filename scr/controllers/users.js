"use strict";
exports.__esModule = true;
exports.setUser = exports.getUsers = exports.users = void 0;
exports.users = [];
function getUsers(request, response) {
    return response.status(200).json(exports.users);
}
exports.getUsers = getUsers;
function setUser(request, response) {
    exports.users.push({ id: exports.users.length + 1, name: request.body.name });
    return response.status(200).json(exports.users);
}
exports.setUser = setUser;
