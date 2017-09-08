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

