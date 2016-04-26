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
			$("[data-ride='carousel']").carousel();
			$("#bigtab").tab();
			var flag = false;
			$(".color").click(function(){
				flag = !flag;
				flag?$(this).colorpicker("show"):$(this).colorpicker("hide");
				$(this).colorpicker("place");
			})

			$(".switch").bootstrapSwitch();
			$("#showfiletab").click(function(){
				$("#filetab").addClass("filetabshow");
			});
			$(document).mousedown(function(event) {
				console.log($(event.target).parents(".filetabshow"))
				if(event.which==1&&$(event.target).parents(".filetabshow").length==0){
					$("#filetab").removeClass("filetabshow");
				}
			});
		}
	}
})