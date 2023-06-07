define(['jquery'],
  function ($) {

  $(function () {
    let nav = $('.page-header');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        nav.addClass("fixed-header");
        $('body').css('padding-top', 70);
        $( ".nav-sections" ).attr("style", "display:none");
        console.log('scrool adicionado');
      } else {
        nav.removeClass("fixed-header");
        $('body').css('padding-top', 0);
        $( ".nav-sections" ).attr("style", "display:block");

        console.log('scrool removido');
      }
    });

    $('.page-header').mouseover(function() {
      $( ".nav-sections" ).attr("style", "display:block");
    });
  });
});