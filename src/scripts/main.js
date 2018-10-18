// Main
console.log('FullStack Vietnam!')
$(document).ready(function(){
	$('.home_slider').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true,
		autoplay: true,
	});
});
//Slider Top Seller
$(document).ready(function(){
	$('.top_seller').owlCarousel({
		items: 4,
		nav: true,
		loop: true,
		autoplay: true,
	});
});

