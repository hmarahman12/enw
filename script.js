$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $('.navbar').addClass("sticky");
            $('.navbar2').addClass("stickyy");
        }else{
            $('.navbar').removeClass("sticky");
            $('.navbar2').removeClass("stickyy");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up-script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing",{
        strings: ["Compuer" , "Desktop" , "Laptop" , "i Phone" , "Smart Phone" , "Evrything"],
        typeSpeed: 100,
        backSpeed:70,
        loop:true
    });
    var typed = new Typed(".typingg",{
        strings: ["Compuer" , "Desktop" , "Laptop" , "i Phone" , "Smart Phone" , "Evrything"],
        typeSpeed: 100,
        backSpeed:70,
        loop:true
    });
    var typed = new Typed(".typinggg",{
        strings: ["Compuer" , "Desktop" , "Laptop" , "i Phone" , "Smart Phone" , "Evrything"],
        typeSpeed: 100,
        backSpeed:70,
        loop:true
    });
    var typed = new Typed(".typingggg",{
        strings: ["Compuer" , "Desktop" , "Laptop" , "i Phone" , "Smart Phone" , "Evrything"],
        typeSpeed: 100,
        backSpeed:70,
        loop:true
    });
    var typed = new Typed(".typinggggg",{
        strings: ["Compuer" , "Desktop" , "Laptop" , "i Phone" , "Smart Phone" , "Evrything"],
        typeSpeed: 100,
        backSpeed:70,
        loop:true
    });
    var typed = new Typed(".typingggggg",{
        strings: ["Compuer" , "Desktop" , "Laptop" , "i Phone" , "Smart Phone" , "Evrything"],
        typeSpeed: 100,
        backSpeed:70,
        loop:true
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});