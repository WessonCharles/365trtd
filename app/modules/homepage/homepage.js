'use strict';

define(['jquery','bt','pe'],function($){
	return {
		init:function(){
			$("[data-hover='dropdown']").dropdownHover();
			$("[data-toggle='ws-tab'] .btn").click(function(){
			    $(this).parents("[data-toggle='ws-tab']").find(".active").removeClass('active');
			    $(this).addClass("active");
			})
			$(".tags label").click(function(){
			    $(this).toggleClass("active");
			})
			$("#top-carousel").carousel();
			$("#bigtab").tab();
		}
	}
})