jQuery(document).ready(function (e) {

    // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // // header fixed
    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //
    //     if (width > 1024) {
    //         if (scroll >= 100) {
    //             $(".header").addClass("fixed");
    //         } else {
    //             $(".header").removeClass("fixed");
    //         }
    //     } else {
    //         if (scroll >= 100) {
    //             $(".header").hide();
    //             $('.float-menu-icon').addClass('open');
    //         } else {
    //             $(".header").show();
    //             $('.float-menu-icon').removeClass('open');
    //         }
    //     }
    // });

    $('#matbang1 .nav-item').click(function () {
        const data = $(this).attr('data-name');
        $('#matbang1 .nav-item').removeClass('active');
        $(this).addClass('active');
        $('#matbang1 .panel-item').removeClass('active');
        $('#matbang1 .' + data).addClass('active');
    })

    $('#matbang2 .nav-item').click(function () {
        const data = $(this).attr('data-name');
        $('#matbang2 .nav-item').removeClass('active');
        $(this).addClass('active');
        $('#matbang2 .panel-item').removeClass('active');
        $('#matbang2 .' + data).addClass('active');
    })


    // open nav menu mobile
    $(".header .menu-icon").on("click", function () {
        $('.mobile-menu').addClass('open');
        $('.overlay').addClass('open');
    });

    $('.float-menu-icon').on('click', function () {
        $('.mobile-menu').addClass('open');
            $('.overlay').addClass('open');
    })

    $('.close-menu').click(function () {
        $('.mobile-menu').removeClass('open');
        $('.overlay').removeClass('open');
    })

    window.onscroll = function () {
        scrollFunction()
    };

    // khai báo hàm scrollFunction
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTop").style.display = "block";
            $('#scrollTop').addClass('show');
        } else {
            $('#scrollTop').removeClass('show');
        }
    }

    //gán sự kiện click cho button
    document.getElementById('scrollTop').addEventListener("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});