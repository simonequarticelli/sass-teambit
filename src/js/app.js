var $ = require('jquery'); //<-- prendi jquery e crea variabile dollaro

$(document).ready(function(){
  //nascondo il dropdown-menu e la seconda nav
  $('.dropdown').hide();
  $('.header__nav_2').hide();

  //dropdown-menu
  $('.header__nav__menu > ul > li:first-child').mouseenter(function(event) {
    $('.dropdown').fadeIn(100);
  }).mouseleave(function(event) {
    $('.dropdown').fadeOut(100);
  });

  //controllo lo scroll della finestra
  $(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
      $('.header__nav_2').slideDown(200);
    }else{
      $('.header__nav_2').slideUp(200);
    }
  })

});
