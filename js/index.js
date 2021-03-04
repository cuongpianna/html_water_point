jQuery(document).ready(function (e) {
    $('.has-sub').click(function (){
        $(this).find('.sub-menu').toggleClass('show');
    });

    $('#btn-Tool').click(function (){
        $('#tool').addClass('show');
    });

    $('#close-tool').click(function (){
        $('#tool').removeClass('show');
    })

    $('#btn-classDiagram').click(function (){
        $('#classDiagram').addClass('show');
    });

    $('#close-classDiagram').click(function (){
        $('#classDiagram').removeClass('show');
    })

    $('.btn-toggle').click(function () {
        let parentClass = $(this).parent().next('.class-lv1');
        if(parentClass) {
            $(this).toggleClass('show');
        }
        $(parentClass).slideToggle();
    })

    $('.class-lv1__item .btn-toggle').click(function () {
        let parentClass = $(this).parent().next('.class-lv2');
        if(parentClass) {
            $(this).toggleClass('show');
        }
        $(parentClass).slideToggle();
    })

    $('.nav-button').click(function (){
        if(!$(this).hasClass('close')) {
            $('body').addClass('no-scroll');
        }
        $(this).toggleClass('close');
        $('ul.menu').toggleClass('open');
    })

});
