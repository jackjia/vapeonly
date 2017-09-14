//banner swiper
$.fn.bannerRoll=function(obj,pagination) {
    var mySwiper = new Swiper(obj, {
        loop: true,
        autoplay: 5000,
        speed: 400,
        pagination:pagination,
        paginationClickable: true
    })

    $(this).find('.arrow-left').on('click', function () {
        mySwiper.swipePrev();
    })
    $(this).find('.arrow-right').on('click', function () {
        mySwiper.swipeNext();
    })


    $(this).mouseenter(function () {
        mySwiper.stopAutoplay();
    })
    $(this).mouseleave(function () {
        mySwiper.startAutoplay();
    })
}


//video openWindow
$.fn.videoWindow=function(url) {
    $("header,main,footer").addClass("blur")
    var videobody='<div  class="videobox"><div class="video-close"><i class="icon-close"></i></div><iframe src="'+url+'" frameborder="0" allowfullscreen></iframe></video><div class="video-masker"></div>'
    $(videobody).appendTo("body")
    $("body").css("overflow","hidden");
    setTimeout(function () {
        $(".videobox iframe").addClass("videobox-over")
    },500)

    $(".video-masker,.icon-close").click(function(){
        $("body").removeAttr("style");
        $(".videobox").remove();
        $(".blur").removeClass("blur")
    })
}

$(function() {

    //  选项卡效果
    $(".wapper-list li").eq(0).addClass('active1');
    $(".wapper-list li").click(function () {
        $(this).addClass('active1').siblings().removeClass('active1');
        $(".content-cons").eq($(this).index()).addClass('active').siblings().removeClass('active');
    })

    // 滑到一定高度 固定定位
    if ($(".support-detail").length > 0) {
    var navH = $(".support-detail").offset().top;
    $(window).scroll(function () {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();

        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if (scroH >= navH) {
            $(".support-detail").css({"position": "fixed", "top": 0, 'background': '#fff', 'zIndex': '99999'});
        } else if (scroH < navH) {
            $(".support-detail").css({"position": "relative", 'zIndex': '88'});
        }
    })
    }
    //  分页点击效果

    // $(".page li a").click(function(){
    //     $(this).addClass('focus')
    // })
})


