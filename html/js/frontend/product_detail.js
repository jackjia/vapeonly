$(function(){
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
            console.log(2)
            $(".support-detail").css({"position":"fixed","top":0,'background':'#fff','zIndex':'99999'});
        }else if(scroH < navH ){
            $(".support-detail").css({"position":"static"});
        }
    })
    
})
