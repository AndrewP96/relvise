$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.footer__label').click(function(event){
        if($('.footer__row').hasClass('one')){
            $('.footer__label').not($(this)).removeClass('active');
            $('.footer__menu').not($(this).next()).slideUp(600);
        }
        $(this).toggleClass('active').next().slideToggle(600);
    })
});