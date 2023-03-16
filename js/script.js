$( document ).ready(function() {
    $('.clients-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.client-slider-nav'),
        nextArrow: '<button type="button" class="slick-nav slick-next"><img src="./img/clients/next.png" alt=""></button>',
        prevArrow: '<button type="button" class="slick-nav  slick-prev"><img src="./img/clients/prev.png" alt=""></button>'
      });
});