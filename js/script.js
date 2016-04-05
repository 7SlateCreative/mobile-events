$(function(){
  $( "div.character" ).bind( "tap", tapHandler );
 
  function tapHandler( event ){
  	$( event.target ).removeClass("walk-right walk-left");
    $( event.target ).addClass( "jump" );
  }
});

$(function(){
  // Bind the swipeleftHandler callback function to the swipe event on div.box
  $( "div.character" ).on( "swipeleft", swipeleftHandler );
 
  // Callback function references the event target and adds the 'swipeleft' class to it
  function swipeleftHandler( event ){
  	$( event.target ).removeClass("walk-right jump");
    $( event.target ).addClass( "walk-left" );
  }
});

$(function(){
    // Bind the swiperightHandler callback function to the swipe event on div.box
  $( "div.character" ).on( "swiperight", swiperightHandler );
 
  // Callback function references the event target and adds the 'swiperight' class to it
  function swiperightHandler( event ){
  	$( event.target ).removeClass( "walk-left jump" );
    $( event.target ).addClass( "walk-right" );
  }
});