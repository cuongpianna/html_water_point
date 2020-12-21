jQuery(document).ready(function (e) {


    window.onscroll = function () {
        scrollFunction()
    };


    function scrollFunction() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            $(".header").addClass('fixed');
        } else {
            $(".header").removeClass('fixed');
        }
    }

    $('.mobile-open').click(function () {
        $('.nav_wrap').toggle('fast')
        if(!$('.header').hasClass('mobile_fixed')) {
            $('.header').addClass('mobile_fixed');
        }else {
            $('.header').removeClass('mobile_fixed');
        }
        // $('.header').addClass('fixed');
    })


    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 400,
        // spaceBetween: 100,
        slidesPerView: 6,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 150,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 100,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 100,
            },
        }
    })

});