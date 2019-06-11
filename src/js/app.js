var $ = require('jquery'); //<-- prendi jquery e crea variabile dollaro

$(document).ready(function(){
  $('.dropdown').hide();

  $('.header__nav__menu > ul > li:first-child').mouseenter(function(event) {
    $('.dropdown').fadeIn(100);
  }).mouseleave(function(event) {
    $('.dropdown').fadeOut(100);
  });


  // if ($('html').scrollTop() > 100) {
  //   $('.header__nav_2').show();
  // }else{
  //   $('.header__nav_2').hide();
  // }







});
