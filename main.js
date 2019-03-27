$(document).ready(function() {
  // $(".slick").slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   adaptiveHeight: true
  // });

  $(".slick").slick({
    dots: true,
    slidesToShow: 1
  });

  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".toggle-newsletter-modal").click(function() {
    $(".newsletter-modal").toggleClass("is-active");
  });
});
