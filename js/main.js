$(function(){

	$(".container").layout({
		fit:true,
		border:false
	});

	$(".tab").tabs({
		fit:true,
		tabHeight:80,
		tabWidth:120,
		border:false,
		selected:1
	});

	$(".subtab").tabs({
		fit:true,
		border:false,
		plain:true
	});

});