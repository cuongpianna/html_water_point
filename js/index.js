jQuery(document).ready(function (e) {
    $('.list-post__page .post-item .star-number').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 20,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#e48207',
        useGradient: false,
        readOnly: true
    })

    $('.list-post__page .post-rate__star').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 18,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#e48207',
        useGradient: false,
        readOnly: true
    })

    $('.list-rate__page .rate-star__num').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 44,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#e48207',
        useGradient: false,
        readOnly: true
    })

    $('.main-rate__page .rate-row .rate-star').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 22,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#e48207',
        useGradient: false,
        readOnly: true
    })

    $('.main-rate__page .rate-guide__form .star-average').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 28,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#e48207',
        useGradient: false,
        readOnly: true
    })

    $('.rate-total__star').starRating({
        initialRating: 3.5,
        starShape: 'rounded',
        starSize: 26,
        emptyColor: 'lightgray',
        hoverColor: 'salmon',
        activeColor: '#e48207',
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
