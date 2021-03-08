jQuery(document).ready(function (e) {
    $('.has-sub').click(function () {
        $(this).find('.sub-menu').toggleClass('show');
    });

    $('#btn-Tool').click(function () {
        $('.left__sidebar').removeClass('show');
        $('#tool').addClass('show');
    });

    $('#close-tool').click(function () {
        $('#tool').removeClass('show');
    })

    $('#btn-classDiagram').click(function () {
        $('.left__sidebar').removeClass('show');
        $('#classDiagram').addClass('show');
    });

    $('#close-classDiagram').click(function () {
        $('#classDiagram').removeClass('show');
    })

    $('.btn-toggle').click(function () {
        let parentClass = $(this).parent().next('.class-lv1');
        if (parentClass) {
            $(this).toggleClass('show');
        }
        $(parentClass).slideToggle();
    })

    $('.class-lv1__item .btn-toggle').click(function () {
        let parentClass = $(this).parent().next('.class-lv2');
        if (parentClass) {
            $(this).toggleClass('show');
        }
        $(parentClass).slideToggle();
    })

    $('.nav-button').click(function () {
        if (!$(this).hasClass('close')) {
            $('body').addClass('no-scroll');
        }
        $(this).toggleClass('close');
        $('ul.menu').toggleClass('open');
    })

    $('.has-sub.content-folder .content-folder__title').click(function () {
        $(this).parent().find('.sub__content-folder').slideToggle();
    })

    let link = window.location.href;

    if (link.includes('index')) {
        $('.index').addClass('active');
    } else if (link.includes('map')) {
        $('.map').addClass('active');
    } else if (link.includes('feedback')) {
        $('.feedback').addClass('active');
    }

    let width = window.innerWidth;

    // rule page
    $('.rule-page .rule').click(function () {

        if (width <= 768) {
            $('.rule-content').hide();

            $(`#${$(this).attr('data-rule')}`).show("slide", {direction: "right"}, 300);

            $('.rule-page .content-right').addClass('show');

            $('.rule-content h4').click(function () {
                $('.rule-content').hide();
                $('.rule-page .content-right').removeClass('show');
            });

            $('.rule-content h3').click(function () {
                $('.rule-content').hide();
                $('.rule-page .content-right').removeClass('show');
            });
        }
    })

    // map page
    $('.map-page .content-folder__title').click(function () {
        if ($(this).attr('data-map')) {
            $('.map-content').hide();
            $(`#${$(this).attr('data-map')}`).show("slide", {direction: "right"}, 300);

            let widthh = window.innerWidth

            if (widthh <= 768) {
                $('.map-page .content-right').addClass('show');

                $('.map-page .map-title').click(function () {
                    $('.map-page .content-right').removeClass('show');
                    $('.map-content').hide();
                });

            }
        }
    })

    $('#inpCheck1').change(function (e) {
        $(this).parent().parent().next('.range-wrap').slideToggle();
    })

    $('.slide-wrap__top .left svg').click(function (){
        console.log('click')
    })


    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: { lat: -33, lng: 151 },
            disableDefaultUI: true,
        });
    }
});
