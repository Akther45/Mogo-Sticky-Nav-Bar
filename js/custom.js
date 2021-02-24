$(function(){
    
    var  backToTop = $('.back_to_top');
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 400){
           backToTop.fadeIn();
        }
        else{
           backToTop.fadeOut(); 
        }
        
        if(scrolling > 300){
           $('.menubg').addClass('fixed-nav');
        }
        else{
           $('.menubg').removeClass('fixed-nav'); 
        }
    });
    
    backToTop.click(function(){
        $('html,body').animate({
            scrollTop: 0,
        },2000);
    });
    
    //animation scroll js
    var html_body = $('html, body');
    $('.menubg .menu .menu-list a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                },1500);
                return false;
            }
        }
    });
});