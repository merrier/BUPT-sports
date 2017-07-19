$(function () {


    //-----------------初始化bootstrap轮播---------------------
    $('#myCarousel').carousel({});


    //-----------------------新闻框hover事件-----------------------
    $(".content_news_item a").hover(function () {
        $(this).css({"font-size": "16px", "background-color": "#eeeeee", "color": "blue"});
        $(this).children().eq(0).show();
    }, function () {
        $(this).css({"font-size": "15px", "background-color": "white", "color": "black"});
        $(this).children().eq(0).hide();
    });

    //-----------------------赛事首页左右滑动-----------------------
    var pageAll = $(".events_main_contentlist").length;
    var index = 1;


    $(".events_main_right").click(function () {
        // var index = function left();

        var $parent = $(this).parents("div.content_events_main");
        var $v_show = $parent.find("div.events_main_contentbox");

        var $v_content = $parent.find("div.events_main_content");

        var v_width = $v_content.width();

        $(".events_main_contentlist").width(v_width);

        if (!$v_show.is(":animated")) {
            if (index == pageAll) {
                $v_show.animate({left: '0px'}, "slow");
                index = 1;
            } else {
                $v_show.animate({left: '-=' + v_width}, "slow");
                index++;
            }
        }
        return index;
    });


    $(".events_main_left").click(function () {

        // var index = function right();

        var $parent = $(this).parents("div.content_events_main");
        var $v_show = $parent.find("div.events_main_contentbox");

        var $v_content = $parent.find("div.events_main_content");

        var v_width = $v_content.width();

        $(".events_main_contentlist").width();

        if (!$v_show.is(":animated")) {
            if (index == 1) {
                $v_show.animate({left: -v_width * (pageAll - 1)}, "slow");
                index = pageAll;
            } else {
                $v_show.animate({left: '+=' + v_width}, "slow");
                index--;
            }
        }
        return index;
    });


    //----------------------轮播向右与向左------------------------
    $("#myCarousel").hover(function () {
        $(".carousel-control").show();
    }, function () {
        $(".carousel-control").hide();
    });

});
