$( "#texiao" ).click(function() {
  $("#texiao2").effect( "bounce", "slow" );
});

$( "#toggle" ).click(function() {
  $( "#elem" ).animate({
    color: "green",
    backgroundColor: "rgb( 20, 20, 20 )"
  });
});

$( "#baiye2" ).click(function() {
  $( "#baiye" ).toggle( "blind",{direction:"right"} );
});

$( "#bounce2" ).click(function() {
  $( "#bounce" ).toggle( "bounce", { times: 3,distance : 20}, "slow" );
});