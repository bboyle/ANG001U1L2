// onready
$(function() {
	'use strict';

	var button;

	// clear the result
	$( '#result' ).addClass( 'hide' );


	// manage calculator submissions
	$( 'form' )
	.on( 'submit', function( event ) {
		event.preventDefault();
		$( '#result' ).text( button.value ).removeClass( 'hide' );
	})
	.on( 'click', 'button', function() {
		button = this;
	});
});