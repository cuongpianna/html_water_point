jQuery(document).ready(function (e) {
    $('.overlay-wrap').fadeOut('1000');
    $('body').removeClass('no-scroll')

    $('.navigation li').click(function (){
        $('.navigation li').removeClass('active');
        $(this).addClass('active');
    })

    $('.jarallax').jarallax({
        speed: 3,
    });

    window.onscroll = function() {scollPos()};

    function scollPos() {
        var height = $('#shop-img')[0].offsetHeight
        var position = $('#shop-img')[0].getBoundingClientRect().top
        if(position <= (height / 2)) {
            $('.box-animate').addClass('bg-gray');
        }else {
            $('.box-animate').removeClass('bg-gray');
        }
    }


    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos});
    });

    $('.only-mobile.open-nav').click(function (){
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


    console.log($('.swiper-wrapper'))

    $('.swiper-wrapper').attr('style', 'transform: translate3d(0px,-135px, 0px);')

});

