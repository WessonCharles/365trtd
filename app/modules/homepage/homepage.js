'use strict';

define(['jquery','bt','colorpicker','bswitch','pe'],function($){
	return {
		init:function(){
			$("[data-hover='dropdown']").dropdownHover();
			$("[data-click='dropdown']").dropdown();
			$("[data-toggle='ws-tab'] .btn").click(function(){
			    $(this).parents("[data-toggle='ws-tab']").find(".active").removeClass('active');
			    $(this).addClass("active");
			})
			$(".tags label").click(function(){
			    $(this).toggleClass("active");
			})
			$("#top-carousel").carousel();
			$("#bigtab").tab();
			var flag = false;
			$(".color").click(function(){
				flag = !flag;
				flag?$(this).colorpicker("show"):$(this).colorpicker("hide");
				$(this).colorpicker("place");
			})

			$(".switch").bootstrapSwitch();
			$("#showfiletab").click(function(){
				console.log("111")
				$("#filetab").addClass("filetabshow");
			});
			$(document).mousedown(function(event) {
				if($(event.target).parents("#filetab").length==0){
					$("#filetab").removeClass("filetabshow");
				}
			});
		}
	}
})