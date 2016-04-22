var Blog = require("./model").Blog,
	Action = require(path_root+"/modules/common"),
	fs = require("fs"),
	path = require("path"),
	util = require("util"),
	imgk = require('imagemagick'),
	// nodemailer = require('nodemailer'),
	async = require("async");

exports.renderIndex = function(req,res){
	res.render("index");
}