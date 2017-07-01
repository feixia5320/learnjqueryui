

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

$( "#scale2" ).click(function() {
  $( "#scale" ).toggle({ effect: "scale", direction: "horizontal" });
//  $( "#scale" ).toggle( "scale" );
});

$( "#size2" ).click(function() {
  $( "#size" ).effect( "size", {
    to: { width: 200, height: 60 }
  }, 1000 );
});

$( "#switchClass2" ).click(function() {
  $( "#switchClass" ).switchClass( "big", "blue", 1000, "easeInOutQuad" );
});

$( "#resizable" ).resizable();

$( "#selectable" ).selectable();

$("#sortable").sortable();

//position
$( "#position1" ).position({
  my: "center",
  at: "center",
  of: "#targetElement"
});
 
$( "#position2" ).position({
  my: "left top",
  at: "left top",
  of: "#targetElement"
});
 
$( "#position3" ).position({
  my: "right center",
  at: "right bottom",
  of: "#targetElement"
});
 
$( document ).mousemove(function( event ) {
  $( "#position4" ).position({
    my: "left+3 bottom-3",
    of: event,
    collision: "fit"
  });
});

//data() Selector
$( "#one" ).data( "color", "blue" );
$( "#three" ).data( "color", "green" );
 
$( ":data(color)" ).each(function() {
  var element = $( this );
  element.css( "backgroundColor", element.data( "color" ) );
});