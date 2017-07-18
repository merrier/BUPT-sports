$(function(){

	//-----------------向右和向左箭头hover--------------
	$(".teamlist_main_content").hover(function(){
		$(".teamlist_arrow_right").show();
		$(".teamlist_arrow_left").show();
	},function(){
		$(".teamlist_arrow_right").hide();
		$(".teamlist_arrow_left").hide();
	});

	//----------------球队列表轮播-----------------

	var pageAll = 2;
	var index = 1;


	$(".teamlist_arrow_right").click(function(){
		// var index = function left();
			
		var $parent = $(this).parents("div.contentBox");
		var $v_show = $parent.find("div.teamlist_main_contentbox");

		var $v_content = $parent.find("div.teamlist_main_content");

		var v_width = $v_content.width();
		
		$(".teamlist_main_contentlist").width(v_width);

		if(!$v_show.is(":animated")){
			if(index == 2){
				$v_show.animate({left : '0px'},"slow");
				index=1;
			}else{
				$v_show.animate({left : '-='+v_width},"slow");
				index++;
			}
		}
		console.log(index);
		return index;	
	});


	$(".teamlist_arrow_left").click(function(){

		// var index = function right();
			
		var $parent = $(this).parents("div.contentBox");
		var $v_show = $parent.find("div.teamlist_main_contentbox");

		var $v_content = $parent.find("div.teamlist_main_content");

		var v_width = $v_content.width();
		
		$(".teamlist_main_contentlist").width();

		if(!$v_show.is(":animated")){
			if(index == 1){
				$v_show.animate({left : -v_width*1},"slow");
				index=2;
			}else{
				$v_show.animate({left : '+='+v_width},"slow");
				index--;
			}
		}
		console.log(index);
		return index;
	});
	
});
