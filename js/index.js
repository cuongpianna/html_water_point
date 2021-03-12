jQuery(document).ready(function (e) {
    // $('.intro-img').paroller();

    $('.navigation li').click(function (){
        $('.navigation li').removeClass('active');
        $(this).addClass('active');
    })

    $('.jarallax').jarallax({
        speed: 1.5,
    });


    // $('.owl-carousel').owlCarousel({
    //     items: 2,
    //     nav: false,
    //     margin: 0,
    //     center: true,
    //     loop:true,
    // });
    //
    // $('.owl-carousel').data('owl.carousel').difference = function(first, second) {
    //     return {
    //         x: first.x - second.x + (first.y - second.y),
    //         y: first.y - second.y
    //     };
    // };
    //
    // $('.owl-carousel').data('owl.carousel').difference = function(first, second) {
    //     return {
    //         x: first.x - second.x + (first.y - second.y),
    //         y: first.y - second.y
    //     };
    // };
});

