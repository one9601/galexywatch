$('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    items:1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
})

$('.slick-carousel').slick({
  centerMode: true,
  slidesToShow: 3,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  edgeFriction: 0.05,
  infinite: true, 
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1
      }
    }]
});