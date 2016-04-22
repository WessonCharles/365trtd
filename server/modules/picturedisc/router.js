var express = require('express');
var route = express.Router();
var index = require('./index');

// middleware specific to this router
route.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})



module.exports = route;