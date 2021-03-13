jQuery(document).ready(function (e) {
    $('.overlay-wrap').fadeOut('1000');
    $('body').removeClass('no-scroll')

    $('.navigation li').click(function () {
        $('.navigation li').removeClass('active');
        $(this).addClass('active');
    })

    $('.jarallax').jarallax({
        speed: 3,
    });

    window.onscroll = function () {
        scollPos()
    };

    function scollPos() {
        var height = $('#shop-img')[0].offsetHeight
        var position = $('#shop-img')[0].getBoundingClientRect().top
        if (position <= (height / 2)) {
            $('.box-animate').addClass('bg-gray');
        } else {
            $('.box-animate').removeClass('bg-gray');
        }
        let width = $(window).width();
        if (width > 768) {
            let bannerH = $('.introduce')[0].getBoundingClientRect().top
            if (bannerH < 0) {
                $('.navigation').addClass('fixed');
                // $('.navigation').animate({
                //     'right': '50px'
                // });

            } else {
                $('.navigation').removeClass('fixed');
            }
        }
    }


    $(document).on('click', 'a[href^="#"]', function (e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos});
    });

    $('.only-mobile.open-nav').click(function () {
        $(this).parent().toggleClass('show');
    })

    var swiper = new Swiper(".swiper-container", {
        direction: "vertical",
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 0
            }
        }

    });


    $('.swiper-wrapper').attr('style', 'transform: translate3d(0px,-135px, 0px);')

    $('.nav1').addClass('show');
    var show = 'nav1';
    setInterval(function () {
        if (show === 'nav1') {
            show = 'nav2';
            $('.slick2').fadeIn(500);
            $('.slick1').fadeOut(500);
            $('.nav2').addClass('show');
            $('.nav1').removeClass('show');
            $('.slider-header').addClass('slide2');
            $('.slider-header').removeClass('slide1');
        } else {
            show = 'nav1';
            $('.slick1').fadeIn(500);
            $('.slick2').fadeOut(500);
            $('.nav1').addClass('show');
            $('.nav2').removeClass('show');
            $('.slider-header').addClass('slide1');
            $('.slider-header').removeClass('slide2');
        }
    }, 5000)

    $('.slider-header__nav .navs').click(function () {
        if ($(this).hasClass('nav1')) {
            show = 'nav1';
            $('.nav1').addClass('show');
            $('.nav2').removeClass('show');
            $('.slick1').fadeIn(100);
            $('.slick2').fadeOut(100);
            $('.slider-header').addClass('slide1');
            $('.slider-header').removeClass('slide2');
        } else {
            show = 'nav2';
            $('.nav2').addClass('show');
            $('.nav1').removeClass('show');
            $('.slick2').fadeIn(100);
            $('.slick1').fadeOut(100);
            $('.slider-header').addClass('slide2');
            $('.slider-header').removeClass('slide1');
        }
    })
});

