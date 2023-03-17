$( document ).ready(function() {
    $('.clients-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.client-slider-nav'),
        nextArrow: '<button type="button" class="slick-nav slick-next"><img src="./img/clients/next.png" alt=""></button>',
        prevArrow: '<button type="button" class="slick-nav  slick-prev"><img src="./img/clients/prev.png" alt=""></button>'
      });
      $(".accordeon-item-title").click(function(){
        var acc_body = $(this).parent(".accordeon-item").find('.accordeon-item-body');
        var acc_toggler = $(this).parent(".accordeon-item").find('span');
        if(acc_toggler.html() == "+"){
          acc_toggler.html('-')
        }else {
          acc_toggler.html('+')
        }
        //$('.accordeon-item-body').not($(this).next()).slideUp(400);
        
        //$('.accordeon-item-title span').not($(this).next()).html('+')
        
        $(this).next().slideToggle(400);
      })
});