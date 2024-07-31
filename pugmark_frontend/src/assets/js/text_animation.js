
function tm_animate_text() {
	var animateSpan = $('.animation_text_word');
	animateSpan.typed({
		strings: ["PUGMARK HOLIDAYS", "PUGMARK HOLIDAYS", "PUGMARK HOLIDAYS"],
		loop: true,
		startDelay: 1e3,
		backDelay: 3e3
	});
}

$(document).on('ready', function () {
	(function ($) {
		tm_animate_text();
	})(jQuery);
});