global.db_server = "localhost";
global.db_port = 27017;
global.root_name = "365trtd";
global.upload_root = __dirname;
// global.path_core = __dirname+"/server/api/core";
global.path_api = __dirname+"/server/modules/common/common"
global.BaseApi = {isDebug : true};
global.file_url = __dirname;


var mongoose = require('mongoose')
var uri = 'mongodb://'+db_server+':'+db_port+'/365trtd';
global.db = mongoose.connect(uri,function(err){
    if(!err){console.log("mongodb is connected")}else{
        throw err;
    }
});

var express = require('express');
var path = require('path');
var session = require('express-session'); //如果要使用session，需要单独包含这个模块
var RedisStore = require('connect-redis')(session);
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var ejs = require("ejs");

var app = express();
app.use(session({
  store: new RedisStore({
    host: "127.0.0.1",
    port: 6379,
    db: "365trtd"
  }),
  resave:false,
  saveUninitialized:false,
  secret: 'keyboard cat'
}))


/**
 * app.get("env")来获取环境 是开发环境还是生产环境，来决定
 * 进入不同的前段路径。
 *
 * (以下操作要进入项目根目录设置)
 * 
 * 在此之前，应该在开发环境的电脑上配置export NODE_ENV=development
 *
 * 再服务器上配置export NODE_ENV=production，并且服务器上 应该对前端执行gulp
 * 
 * @type {[type]}
 */
var env = app.get("env");
console.log(env)
//开发环境
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

if(env=="development"){
    console.log("开发-----")
    app.set('views', path.join(__dirname, 'app'));
}else{
//生产环境
    console.log("线上")
    app.set('views', path.join(__dirname, 'dist'));
}

global.path_root = path.join(__dirname,'server');
global.path_static = path.join(__dirname, 'app');
console.log(path_root)

app.use(logger('dev'));
app.use(bodyParser.json());//for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));// for parsing application/x-www-form-urlencoded
app.use(multer({dest:'./uploads/'}));// for parsing multipart/form-data
app.use(cookieParser());
//开发环境
if(env=="development"){
    app.use(express.static(path.join(__dirname, 'app')));
}else{
//生产环境
    app.use(express.static(path.join(__dirname, 'dist')));
}

app.use(function(req,res,next){
    console.log("it works")
    next();
})

var app_list = ['common','homepage','logreg','picturedisc'];
for(var i=0;i<app_list.length;i++){
    var app_route = require(path_root+'/modules/'+app_list[i]+'/router');
    app.use("/",app_route) 
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err)
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
