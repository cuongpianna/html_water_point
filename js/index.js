jQuery(document).ready(function (e) {
    $('.nav-button').click(function (){
        if($(this).hasClass('close')) {
            $(this).removeClass('close');
        }else {
            $(this).addClass('close');
        }
    })
});
