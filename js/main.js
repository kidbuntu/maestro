$(function(){

	$(".container").layout({
		fit:true,
		border:false
	});

	$(".tab").tabs({
		fit:true,
		tabHeight:80,
		tabWidth:135,
		border:false,
		selected:5
		// plain:true
	});

	$(".subtab").tabs({
		fit:true,
		border:true,
		plain:true
	});

});