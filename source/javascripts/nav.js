//= require "jquery.min"
//= require "sticky"

var nav = (function($) {
	
	var PVARS = {
		// How many px before nav is fixed
		addTopFixed: 200,
		// How many px before section to animate to
		addTopEach: 125,
		// Time in milliseconds for scrolling animation
		animationTime: 800,

		$window:		$(window),
		$root:			$('html, body'),
		$highlight:		$('.highlight'),
		$a:				$('.hash_link'),
		$navWrapper:	$(".nav__wrap")
	};

	// Private functions
	function scrollToLink(e) {
		e.preventDefault();
		var href = $.attr(this, 'href');

		PVARS.$root.animate({
				scrollTop: $(href).offset().top - PVARS.addTopEach
		}, PVARS.animationTime );
	}

	function ifNavFixed() {
		// these need to update on scroll
		var windowScroll = PVARS.$window.scrollTop();
		var $sticky_wrapper = $('.sticky-wrapper');

		if ( $sticky_wrapper.hasClass('is-sticky') ) {
			PVARS.$highlight.each(function(i) {

					if ($(this).position().top <= windowScroll + PVARS.addTopFixed ) {
						$('.nav a.active').removeClass('active');
						$('.nav a').eq(i+1).addClass('active');
					}
				});
		}
		else {
			$('.nav a.active').removeClass('active');
		}
	}
	
	
	return {
		init: function() {
			// Keep the navbar on top
			PVARS.$navWrapper.sticky( { topSpacing: -16 } );

			// Animate scroll to the hash links
			PVARS.$a.on('click', scrollToLink );

			// Highlight current section on scroll if the nav is fixed
			PVARS.$window.on('scroll', ifNavFixed );
		}
	};
})(jQuery);

nav.init();