document.addEventListener("DOMContentLoaded", function() {

	$('.classes-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		focusOnSelect: true
	});

	$('.happy-clients__slider').slick({
		dots: true,
		infinite: true
	})

});
