var express = require('express');
var route = express.Router();
var index = require('./index');

route.get("/homepage",index.renderHomepage)

module.exports = route;