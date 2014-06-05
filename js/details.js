// JavaScript Document
$(document).ready(function() {
	$("#JMMButton").click(function(){
		$("#JMMframe").toggle("slow");
	});
	$("#JMMButton").hover(function () {
		$(this).addClass("libraryLableMouseOver");
	}, function () {
		$(this).removeClass("libraryLableMouseOver");
	});
	$("#JMTButton").click(function(){
		$("#JMTframe").toggle("slow");
	});
	$("#JMTButton").hover(function () {
		$(this).addClass("libraryLableMouseOver");
	}, function () {
		$(this).removeClass("libraryLableMouseOver");
	});
	$("#customButton").click(function(){
		$("#customFrame").toggle("slow");
	});
	$("#customButton").hover(function () {
		$(this).addClass("libraryLableMouseOver");
	}, function () {
		$(this).removeClass("libraryLableMouseOver");
	});
});