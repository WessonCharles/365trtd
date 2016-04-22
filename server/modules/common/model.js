var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var userSchema = new Schema({
	name:String,
	wbopenID:String,
	wbname:String,
	wbImg:String,
	forgotid:String,
	forgotTime:Date,
	qqopenID:String,
	qqnickname:String,
	qqImg:String,
	email:String,
	password:String
})

// userSchema.index({"author._id":1});
// userSchema.index({time:-1});
var User = BaseApi.User =  exports.User = mongoose.model("User",userSchema,"user");