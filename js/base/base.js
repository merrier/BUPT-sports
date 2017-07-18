$(function(){
	//-----------------------导航栏hover事件-----------------
	$(".footer_list_item").hover(function(){
		$(this).find(".footer_list_second").show();
	},function(){
		$(this).find(".footer_list_second").hide();
	});


	//----------------------缓慢返回顶部----------------------------------
	 	$("#goToTop").hide()//隐藏go to top按钮
        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>400){//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
                    $("#goToTop").fadeIn();
                } else {
                    $("#goToTop").fadeOut();
                }
            });
        });
     

        // 给go to top按钮一个点击事件
        $("#goToTop a").click(function(){
            $("html,body").animate({scrollTop:0},1000);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
            return false;
        });

    //-------------------------右侧浮动意见反馈-------------------------
        $("#feedbacktab").bind("click", function() {
            if ($("#feedbackall").attr("visible")) {
                $("#feedbackall").animate({
                    right: "-256px"
                });
                $("#feedbackall").removeAttr("visible");
                $("#feedbacktab i").removeClass("fa-angle-double-right")
                                 .addClass("fa-angle-double-left");
            } else {
                $("#feedbackall").animate({
                    right: "0px"
                });
                $("#feedbackall").attr("visible", "1");
                $("#feedbacktab i").removeClass("fa-angle-double-left")
                                 .addClass("fa-angle-double-right");
            }
            return false
        });
        $("#feedbackall").removeAttr("visible");
});