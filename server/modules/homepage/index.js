var Action = require(path_root+"/modules/common"),
	fs = require("fs"),
	path = require("path"),
	util = require("util"),
	imgk = require('imagemagick'),
	// nodemailer = require('nodemailer'),
	async = require("async");

exports.renderHomepage = function(req,res){
	var arg = url.parse(req.url);
	res.render("index",{pathname:arg.pathname});
}