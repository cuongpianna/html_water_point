jQuery(document).ready(function (e) {

    $('.btn-pdf').click(function () {
        window.open('https://drive.google.com/file/d/0B_P1DLLo1JS1cGVvaS1feEktcjg/view','_blank');
    })

    if ($(window).width() <= 768) {
        $('.nav-mobile').toggleClass('active');
    }

    if ($(window).width() < 480) {
        $(".review1 .icon").outerHeight($(".review1 .content").outerHeight());

        $(".review2 .icon").outerHeight($(".review2 .content").outerHeight());

        $(".review3 .icon").outerHeight($(".review3 .content").outerHeight());

        $(".review4 .icon").outerHeight($(".review4 .content").outerHeight());
    }

    $('.scroll').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('target');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1500);
    });

    $('.header .item a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('target');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1500);
    })


    window.onscroll = function () {
        scrollFunction()
    };

    // khai báo hàm scrollFunction
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            console.log('sss')
            document.getElementById("scrollTop").style.display = "block";
        } else {
            document.getElementById("scrollTop").style.display = "none";
        }
    }

    document.getElementById('scrollTop').addEventListener("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

});