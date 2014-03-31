//= require "lib/jquery/jquery.min"

// JQuery module
var app = (function($) {
	
	//  Private Configurations
	var config = {
		aPrivateVar: 'a'
	};

	// Private functions
	function aPrivateFunction( $element ) {
		console.log( $element );
	}

	return {
		// Public Functions
		init: function( $an_element ) {
			aPrivateFunction( $an_element );
		}
	};

})(jQuery);

app.init('body');