( function( $ ) {
  
  var url = $( '#drive-url' ),
      btn = $( '#convert-btn' );

  btn.on( 'click', function( event ) {
    found = url.val().match( /d\/([A-Za-z0-9\-]+)/ );
    
    if ( found[1].length ) {
      new_url = 'https://drive.google.com/uc?export=view&id=' + found[1];
      
      url.val( new_url );
    }
  } );
  
} )( jQuery );