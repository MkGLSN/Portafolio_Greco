$('section .title').on('click', function(){
  var sec = $(this).parent().attr('class');
  $(this).parent().addClass('--open').siblings().removeClass('--open');
  $(this).parent().siblings().addClass('--hidden');
  $('.volver').addClass('--open');
  
  if(sec == 'grav'){
    $('body').css('background-color', '#190629');
  }
  else if(sec == 'contentful'){
    $('body').css('background-color', '#192532');
  }
});

$('.volver').on('click', function(e){
  e.preventDefault();
  $('section').removeClass('--open --hidden');
  $(this).removeClass('--open');
});