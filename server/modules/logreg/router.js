var express = require('express');
var route = express.Router();
var index = require('./index');

route.get("/login",index.renderLogin)

module.exports = route;