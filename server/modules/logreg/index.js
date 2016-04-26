var Action = require(path_root+"/modules/common"),
	fs = require("fs"),
	path = require("path"),
	util = require("util"),
	imgk = require('imagemagick'),
	// nodemailer = require('nodemailer'),
	async = require("async");

exports.renderLogin = function(req,res){
	res.render("modules/logreg/login");
}