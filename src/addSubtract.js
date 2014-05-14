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

		// get inputs
		// note: yep, relying on HTML5 form validation to ensure these are integers
		var x = parseInt( $( '#x' ).val(), 10 );
		var y = parseInt( $( '#y' ).val(), 10 );

		var z = button.value === 'plus' ? x + y : x - y;

		$( '#result' )
		.text( x + ' ' + button.value + ' ' + y + ' is ' + z )
		.removeClass( 'hide plus minus' )
		.addClass( button.value );

	})

	.on( 'click', 'button', function() {
		button = this;
	});
});