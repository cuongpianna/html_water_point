jQuery(document).ready(function (e) {
    AOS.init();
    $('.product-images').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        transitionStyle: 'fade',
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1100: {
                items: 1
            }
        }
    })

    $('#openMenu').click(function (){
       $('.menu-wrap').addClass('show');
       $('.badge').addClass('show');
        $('body').addClass('no-scroll');
    });

    $('.badge').click(function (){
        $('.menu-wrap').removeClass('show');
        $('.badge').removeClass('show');
        $('body').removeClass('no-scroll');
    })

    $('.close-menu').click(function (){
        $('.menu-wrap').removeClass('show');
        $('.badge').removeClass('show');
        $('body').removeClass('no-scroll');
    })

});
