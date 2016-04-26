var express = require('express');
var route = express.Router();
var index = require('./index');

route.get("/picture-disc",index.renderPicdisc);

module.exports = route;