$(document).ready(function(){
  $('.slides').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2800,
      swipeToSlide: true,
      arrows: false
  });

  $('.slides-2').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2800,
      swipeToSlide: true,
      arrows: false
  });

  $('.slides-3').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2800,
      swipeToSlide: true,
      arrows: false
  });

  $(".header--btn").on("click","a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
});
