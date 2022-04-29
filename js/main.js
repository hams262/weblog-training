$(document).ready(function(){
  "use strict";
  //Nice Scroll

  $("html").niceScroll();


  var scrollButton=$("#scroll-top");

  $(window).scroll(function()
  {

    if($(this).scrollTop()>=700)
    {
      scrollButton.show();
    }
    else
    {
      scrollButton.hide();
    }
    });

    scrollButton.click(function(){
      $("html,body").animate({scrollTop:0},600);
  });

  //Buttons with effects

  $('.from-left').hover(function(){

    $(this).find('span').eq(0).animate({

      width:'100%'

    },300);

  },function(){

    $(this).find('span').eq(0).animate({

      width:0

    },300);
  });



  //Hide placeholder on focus & restore on blure

  var placeAttr ='';

  $('[placeholder]').focus(function(){

    placeAttr = $(this).attr('placeholder');

    $(this).attr('placeholder','');

  }).blur(function(){

    $(this).attr('placeholder', placeAttr);
  });

});
