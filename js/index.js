jQuery(document).ready(function (e) {
    $('.menu-icon').click(function (){
        $('.menu-wrap').toggleClass('show');
        $('body').toggleClass('no-scroll');
        $('.overlay').toggleClass('show');
    })

    // window.onscroll = function() {stickyHeader()};

    function stickyHeader() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 80) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    }
});

