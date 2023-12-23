$('#review-slider-1').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
  }
})
$('#review-slider-2').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots: false,
  startPosition: 2,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
  }
})