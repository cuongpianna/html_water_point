jQuery(document).ready(function (e) {


    $('.scroll').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('target');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1500);
    });



    // window.onscroll = function () {
    //     scrollFunction()
    // };
    //
    // // khai báo hàm scrollFunction
    // function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         document.getElementById("scrollTop").style.display = "block";
    //     } else {
    //         document.getElementById("scrollTop").style.display = "none";
    //     }
    // }
    //
    // document.getElementById('scrollTop').addEventListener("click", function () {
    //     $("html, body").animate({ scrollTop: 0 }, "slow");
    // });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 6
    })

});