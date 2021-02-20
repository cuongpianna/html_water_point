jQuery(document).ready(function (e) {
    $('.nav-button').click(function (){
        if($(this).hasClass('close')) {
            $(this).removeClass('close');
            $('header .navigation').removeClass('mobile');
            $('body').removeClass('no-scroll');
        }else {
            $(this).addClass('close');
            $('header .navigation').addClass('mobile');
            $('body').addClass('no-scroll');
        }
    })
});
