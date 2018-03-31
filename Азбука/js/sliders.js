/* Слайдеры Максима - начало */
$('.mainSlider_block').slick({
  infinite: true,
  dots: true,
  arrows: false,
  fade: true
});



$('.fourItemProductSlider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        infinite: false,
        centerMode: true,
        centerPadding: '30px'
      }
    }
    ]
});
/* Слайдеры Максима - конец */



/* Слайдеры Галины - начало */
$('.multiple-items').slick({
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
    ]
});
/* Слайдеры Галины - конец */



/* Слайдеры Алексея - начало */

/* Слайдеры Алексея - конец */


/* Слайдеры Дмитрия - начало */

/* Слайдеры Дмитрия - конец */


/* Слайдеры Слайдеры Глеба - начало */

/* Слайдеры Слайдеры Глеба - конец */
