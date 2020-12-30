jQuery(document).ready(function (e) {

    $('.icon-mobile').click(function () {
        $('.header-menu').slideToggle('fast');
    })

    $('.item-action .wrap-right').mouseenter(function () {
        $(this).find('path').attr('fill', '#3294CC')

    }).mouseleave(function () {
        $(this).find('path').attr('fill', '#666')
    });

    $('.owl-carousel')
        .mouseenter(function () {
            $('.owl-prev').show(50);
            $('.owl-next').show(50);
        })
        .mouseleave(function () {
            $('.owl-prev').hide();
            $('.owl-next').hide();
        });

    $('.trending-header .tab.left').mouseenter(function () {
        $(this).find('path').attr('fill', '#3294CC')
        $(this).addClass('hover');

    }).mouseleave(function () {
        if (!$(this).hasClass('active')) {
            $(this).find('path').attr('fill', '#bebebe')
        }

        if ($(this).hasClass('hover')) {
            $(this).removeClass('hover');
        }
    });

    $('.trending-header .tab.right').mouseenter(function () {
        $(this).find('path').attr('fill', '#FD243F')
        $(this).addClass('hover');

    }).mouseleave(function () {
        if (!$(this).hasClass('active')) {
            $(this).find('path').attr('fill', '#bebebe')
        }

        if ($(this).hasClass('hover')) {
            $(this).removeClass('hover');
        }
    });

    $('.trending-header .tab').click(function () {
        $('.trending-header .tab').removeClass('active');
        $('.trending-header .tab').find('path').attr('fill', '#bebebe');
        $(this).addClass('active');
        if($(this).hasClass('left')) {
            $(this).find('path').attr('fill', '#3294CC');
        }else {
            $(this).find('path').attr('fill', '#FD243F')
        }
    })

});
