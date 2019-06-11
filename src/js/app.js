var $ = require('jquery'); //<-- prendi jquery e crea variabile dollaro

$(document).ready(function(){
  $('.dropdown').hide();
  $('.header__nav__menu ul:first-child li').mouseenter(function(event) {
    $('.dropdown').fadeIn(200);
  });

  $('.dropdown').mouseleave(function(event) {
    $('.dropdown').fadeOut(200);
  });







});
