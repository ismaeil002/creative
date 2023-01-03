$(function(){

    "use strick"

    $(".back2top i").on('click',function(){
        $("html,body").animate({
            scrollTop:0
        },1200)
    })

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop()

        if(scrolling > 20){
            $(".back2top i").fadeIn(500)
        }else{
            $(".back2top i").fadeOut(500)
        }

        if(scrolling > 50){
            $(".menu").addClass("nev_ex")
        }else{
            $(".menu").removeClass("nev_ex")
        }
    })


    var mixer = mixitup('.main_maxit');

    $(function($) {
        $.autofilter();
      });

    // team slide
    $('.team_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
        
      });

    //   customer slide
    $('.cstmr_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
        
      });



})