//自动完成部件
var tags = [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ];
$( "#autocomplete" ).autocomplete({
  source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( tags, function( item ){
              return matcher.test( item );
          }) );
      }
});

$( "#autocomplete2" ).autocomplete({
  source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
});

$( "#accordion" ).accordion({ collapsible: true ,active: 2});

$( "#datepicker" ).datepicker({
  beforeShowDay: $.datepicker.noWeekends
});

//对话框
$( "#dialog" ).dialog({ autoOpen: false ,
						dialogClass: "no-close",
						buttons: [
						    {
						      text: "OK",
						      click: function() {
						        $( this ).dialog( "close" );
						      }
						    }
						  ]
});

$( "#opener" ).click(function() {
  $( "#dialog" ).dialog( "open" );
});
