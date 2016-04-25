var Blog = require("./model").Blog,
	Action = require(path_root+"/modules/common"),
	url = require('url'),
	fs = require("fs"),
	path = require("path"),
	util = require("util"),
	imgk = require('imagemagick'),
	// nodemailer = require('nodemailer'),
	async = require("async");

exports.renderIndex = function(req,res){
	var arg = url.parse(req.url);
	console.log(arg)
	res.render("index",{pathname:arg.pathname});
}