var express = require('express');
var route = express.Router();
var index = require('./index');

// middleware specific to this router
route.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

route.get("/",index.renderIndex)
// route.get("/all",index.getall);
// route.get("/alltags",index.getalltags);
// route.get("/query",index.getquery)
// route.get("/one/:id",index.getone);
// route.post("/article/comment",index.postcomm)
// // route.get("/tech/delete",index.remove);
// route.delete("/article/delete",index.remove)
// route.post("/common/imageupload",index.imageupload);
// route.get("/common/imagecrop",index.imagecrop);
// route.post("/sendcode",index.sendcode);
// route.post("/login",index.login);

module.exports = route;