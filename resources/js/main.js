$(document).ready(function(){
  $('.carousel').slick({
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  var userScrolled = 0;
  $(window).scroll( function() {
    var saveScrollTop = $(this).scrollTop();
    if (saveScrollTop - userScrolled >= 50) {
      var navbarHeight = $('.navbar').height();
      $('.navbar').animate({
        top: '-' + (navbarHeight),
      }, 150);
      userScrolled = saveScrollTop;
    } else if (userScrolled - saveScrollTop > 50) {
      $('.navbar').animate({
        top: '0px',
      }, 150);
      userScrolled = saveScrollTop;
    };
  });
});
