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
})