//public swiper
$.fn.rollStyle=function(obj,pagewidth,autoplaytime) {
    var $this=$(this);
    var pergroup=Math.floor($(obj).width()/pagewidth);
    var rerview=pergroup;
    if($this.find(obj).find(".swiper-slide").length<=rerview){
        $this.find('.carousel-nav-prev,.carousel-nav-next').hide();
    }
    else{
        $this.find('.carousel-nav-next').show();
    }

    if(autoplaytime==undefined){
        autoplaytime=false;
        loopflag=false;
        $this.find('.carousel-nav-prev').hide();
    }else{
        loopflag=true;
        $this.find('.carousel-nav-prev').show();
    }

    var mySwiper = new Swiper(obj, {
        onSlideChangeStart: function (mySwiper) {
            if(!autoplaytime){
                if(mySwiper.activeIndex==0){
                    $this.find('.carousel-nav-prev').hide();
                }
                else{
                    $this.find('.carousel-nav-prev').show();
                }
                if(mySwiper.activeIndex>=$this.find(obj).find(".swiper-slide").length-Math.floor($(obj).width()/pagewidth)){
                    $this.find('.carousel-nav-next').hide();
                }
                else{
                    $this.find('.carousel-nav-next').show();
                }
            }
            var str1 = $(obj).find(".swiper-wrapper").attr("style");
            $(obj).find(".swiper-wrapper").attr("style", $(obj).find(".swiper-wrapper").attr("style").replace(str1.substring(str1.indexOf("3d(") + 3, str1.indexOf(",")), str1.substring(str1.indexOf("3d(") + 3, str1.indexOf(",")).replace("px", "").split(".")[0] + "px"))
        },
        onTouchEnd: function (mySwiper) {
            var str1 = $(obj).find(".swiper-wrapper").attr("style");
            $(obj).find(".swiper-wrapper").attr("style", $(obj).find(".swiper-wrapper").attr("style").replace(str1.substring(str1.indexOf("3d(") + 3, str1.indexOf(",")), str1.substring(str1.indexOf("3d(") + 3, str1.indexOf(",")).replace("px", "").split(".")[0] + "px"))
        },
        grabCursor: false,
        slidesPerView: rerview,
        autoplay : autoplaytime,
        loop : loopflag,
        speed:400,
        slidesPerGroup: pergroup,

    })

    $this.find('.carousel-nav-prev').on('click', function () {
        mySwiper.swipePrev();
    })
    $this.find('.carousel-nav-next').on('click', function () {
        mySwiper.swipeNext();
    })

    $this.mouseenter(function(){
        mySwiper.stopAutoplay();
    })
    $this.mouseleave(function(){
        mySwiper.startAutoplay();
    })

    $(window).resize(function(){
        var page2=Math.floor(($(obj).width())/pagewidth);
        mySwiper.params.slidesPerView=page2;
        mySwiper.params.slidesPerGroup=page2;
        mySwiper.reInit()
        mySwiper.resizeFix();
        if($(obj).find(".swiper-slide").length<=page2){
            $this.find('.carousel-nav-prev,.carousel-nav-next').hide();
        }
        else{
            $this.find('.carousel-nav-prev,.carousel-nav-next').show();
        }
    })
}

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

//banner swiper


