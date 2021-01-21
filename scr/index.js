"use strict";
exports.__esModule = true;
var express_1 = require("express");
var users_1 = require("./controllers/users");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.get('/', function (request, response) {
    return response.status(200).json({ message: 'Server is online' });
});
app.get('/users', users_1.getUsers);
app.post('/user', users_1.setUser);
app.listen(3333, function () {
    console.log('==> Server is runnig at port 3333');
});
