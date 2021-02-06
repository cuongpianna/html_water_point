jQuery(document).ready(function (e) {

    $('#product-images').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        transitionStyle: 'fade',
        dots: true,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            480: {
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

    $('#product-images2').owlCarousel({
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
            480: {
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

    $('#openMenu').click(function (){
       $('.menu-wrap').addClass('show');
       $('.badge').addClass('show');
        $('body').addClass('no-scroll');
    });

    $('.badge').click(function (){
        $('.menu-wrap').removeClass('show');
        $('.badge').removeClass('show');
        $('body').removeClass('no-scroll');
    })

    $('.close-menu').click(function (){
        $('.menu-wrap').removeClass('show');
        $('.badge').removeClass('show');
        $('body').removeClass('no-scroll');
    })


    if($('.ingredient-item')){
        let width = $('.ingredient-item').outerWidth();
        $('.ingredient-item').css('height', `${width}px`);
    }

    $('.product-rate .rate .rate-star').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 20,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#D0BC27',
        useGradient: false,
        readOnly: true
    })

    $('.meta-rate .rate-star').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 16,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#D0BC27',
        useGradient: false,
        readOnly: true
    })

    $('.rating-box .rating').starRating({
        initialRating: 0,
        starShape: 'rounded',
        starSize: 35,
        emptyColor: 'lightgray',
        hoverColor: '#D0BC27',
        activeColor: '#D0BC27',
        useGradient: false,
        callback: function(currentRating, $el){
            // make a server call here
            console.log(currentRating);
            console.log($el);
        }
    })

});
