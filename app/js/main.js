$(function() {
   $('.outstanding__inner').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        dotsClass: 'slick-dots slider__dots',
        customPaging: function(slick, index) {
          var image = $(slick.$slides[index]).find('.slider__img').attr('src');
          return '<img src="' + image + '" alt="" /> '
        }
      });
        
      $(".header__burger").on('click', function(event){
        $('.header__burger,.header__inner-menu').toggleClass('active');
      });
});
