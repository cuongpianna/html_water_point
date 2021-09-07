jQuery(document).ready(function (e) {
    $('.menu-icon').click(function (){
        $('.menu-wrap').toggleClass('show');
        $('body').toggleClass('no-scroll');
        $('.overlay').toggleClass('show');
    })

    // window.onscroll = function() {stickyHeader()};

    function stickyHeader() {
        if (window.pageYOffset > 80) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    }

    var swiper = new Swiper("#girl-slide__Swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        speed: 700,
    });
});

