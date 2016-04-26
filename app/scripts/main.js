'use strict';

window.setCookie =function(name,value,d){
	var Days = d||30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/;";
}
//读取cookies
window.getCookie=function(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}
//删除cookies
window.delCookie=function(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=window.getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/;";
} 

require.config({
	paths:{
		jquery:'../libs/jquery/dist/jquery.min',
		bt:'../libs/bootstrap/dist/js/bootstrap.min',
		cc:'../libs/colorpicker/components-color-picker.min',
		colorpicker:'../libs/colorpicker/bootstrap-colorpicker',
		bswitch:'../libs/switch/js/bootstrap-switch.min',
		pe:'plugin-extends',
		homepage:'../modules/homepage/homepage',//主页js
	},
	shim:{
        'jquery': {'exports': 'jquery'},
        'bt':['jquery'],
        'cc':['jquery','bt'],
        'colorpicker':['cc'],
        'bswitch':['jquery','bt'],
        'pe':['jquery','bt'],
        'homepage':['jquery','bt','pe'],
	},
	priority: [
        'jquery'
    ],
    urlArgs:(new Date()).getTime()
})
window.name = "NG_DEFER_BOOTSTRAP!";//必须 、延迟引导
require([
	'homepage'
	],function(hp){
		hp.init();
	})
