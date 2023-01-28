$('.slideshow').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  // normal options...
  infinite: true,
  slidesToShow:1,
  dots: true,

  // the magic
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 300,
      settings: 'unslick', // destroys slick
    },
  ],
});
