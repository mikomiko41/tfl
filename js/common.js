// JavaScript Document

$ (function(){

  
  $('#js-nav_button').on('click',function(){
    $('body').toggleClass('is-navMenuOpen');
  });

  $('#js-hamburger').on('click',function(){
    $('body').toggleClass('is-hamburgerMenuOpen');
  });
  
  lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true ,
      'showImageNumberLabel': false,
      'positionFromTop':100
    });

});


