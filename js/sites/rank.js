$(function(){

	$(".content_header_item").click(function(){
		$(this).addClass("rank_current")
			   .siblings().removeClass("rank_current");
	});
	
});
