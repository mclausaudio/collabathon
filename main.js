$(document).ready(function() {
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });

  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $('.toggle-newsletter-modal').click(function(){
      $('.newsletter-modal').toggleClass('is-active')
  });
});
