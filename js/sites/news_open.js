$(function () {

    $(".pic_detail>div").hide();

    var index = 0;
    $('.news_box_pic').click(function () {
        $(".pic_bg").show();
        $(".pic_close").show();
        index = $('.news_box_pic').index(this);
        $(".pic_detail>div").eq(index).show().siblings().hide();
        $(".change_pic .pic_right").click(function () {
            if (index == 3) {
                index = 0;
            } else {
                index += 1;
            }
            $('.pic_detail>div').eq(index).show().siblings().hide();
        })
        $(".change_pic .pic_left").click(function () {
            if (index == 0) {
                index = 3;
            } else {
                index -= 1;
            }
            $('.pic_detail>div').eq(index).show().siblings().hide();
        })
        $(".pic_detail,.change_pic").hover(
            function () {
                $(".change_pic").show();
                $(".rotate_pic").show();
            },
            function () {
                $(".change_pic").hide()
                $(".rotate_pic").hide();
            }
        );
        $(".pic_bg,.pic_close").click(function () {
            $(".pic_detail>div").hide();
            $(".pic_close").hide();
            $(".pic_bg").hide();
            $(".change_pic").hide();
        })
    })

});