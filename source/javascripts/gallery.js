//= require "jquery.min"
//= require "magnific_popup"

var gallery = (function($) {
	var PVARS = {
		//  Magnific Popup Configurations
		delegate: 'a',
		gallery: {
			enabled: true
		},
		type: 'image',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
		}
	};

	// Private functions
	function config( $elements ) {
		$elements.each(
			function() {
				$(this).magnificPopup({
					delegate:		PVARS.delegate,
					gallery:		PVARS.gallery,
					type:			PVARS.type,
					zoom:			PVARS.zoom
				});
			}
		);
	}

	return {
		init: function( $an_element ) {
			config( $an_element );
		}
	};

})(jQuery);

gallery.init( $('.gallery') );