jQuery(document).ready(function (e) {
    AOS.init();
    $('.owl-carousel').owlCarousel({
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

    $('.menu-button').click(function (){
        document.getElementById("myNav").style.width = "100%";
    })

    $('.closebtn').click(function (){
        document.getElementById("myNav").style.width = "0";
    })
});
