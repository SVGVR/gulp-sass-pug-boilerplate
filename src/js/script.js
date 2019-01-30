/* jQuery anchor link */
$(function () {
	$('a[href^="#"]').on('click', function (event) {
		var href = $(this).attr('href'),
			target = $(href == '#' || href == '' ? 'html' : href),
			position = target.offset().top;
		$('body, html').animate({scrollTop: position}, 250, 'swing');
		event.preventDefault();
	});
});

/* Check for device type */
var detectDeviceType = function detectDeviceType() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
	);
};

/* Check if element is visible */
var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
	var partiallyVisible = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	var _el$getBoundingClient = el.getBoundingClientRect();
	
	var top = _el$getBoundingClient.top;
	var left = _el$getBoundingClient.left;
	var bottom = _el$getBoundingClient.bottom;
	var right = _el$getBoundingClient.right;
	var _window = window;
	var innerHeight = _window.innerHeight;
	var innerWidth = _window.innerWidth;
	
	return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

/* Example of GSAP Timeline lite */
$(document).ready(function () {
	var tl = new TimelineLite();
	var htmlAndBody = $('html, body');
	tl.to(htmlAndBody, .1, {overflowY: "hidden"});
	tl.staggerFrom($('.animate'), .7, {y: -200, autoAlpha: 0}, 0.3);
	tl.staggerFrom($('.including'), .3, {x: -400, autoAlpha: 0});
	tl.staggerFrom($('.avatar'), 0.6, {scale: 0, autoAlpha: 0,  ease: Sine.easeOut});
	tl.staggerFromTo($('.row.second div'), .5, {y: 400, autoAlpha: 0}, {y:0, autoAlpha: 1}, 0.3);
	tl.to(htmlAndBody, .1, {overflowY: "auto"});
});