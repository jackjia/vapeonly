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


$(function(){
    $(".about-new-list li").hover(function(){
        $(this).children().find('.about-new-day, .about-new-year').addClass('listActive');
        $(this).children().find('.splice-line').addClass('listActive1').find('.arrows').css('marginRight','145px');
        $(this).children().find('.arrows').css({'marginRight':'130px','background':'#333'});
        
    },function(){
        $(this).children().find('.about-new-day, .about-new-year').removeClass('listActive');
        $(this).children().find('.splice-line').removeClass('listActive1');
        $(this).children().find('.arrows').css({'marginRight':'95px','background':'#fff',});
    })

     //  选项卡效果
     $(".wapper-list li").eq(0).addClass('active1');
     $(".wapper-list li").click(function(){
         $(this).addClass('active1').siblings().removeClass('active1');
         $(".content-cons").eq($(this).index()).addClass('active').siblings().removeClass('active');
     })
 
     // 滑到一定高度 固定定位
     var navH = $(".support-detail").offset().top;
     $(window).scroll(function(){
         //获取滚动条的滑动距离
         var scroH = $(this).scrollTop();
         
         //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
         if(scroH>=navH){
             $(".support-detail").css({"position":"fixed","top":0,'background':'#fff','zIndex':'99999'});
         }else if(scroH < navH ){
             $(".support-detail").css({"position":"static"});
         }
     })

    //  分页点击效果

    // $(".page li a").click(function(){
    //     $(this).addClass('focus')
    // })
})


