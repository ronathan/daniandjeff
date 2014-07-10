$(function(){

	$('.main-page-text').css('opacity', '1');
	$('.main-page-text').addClass('fadeInUp');

	// Image Slider for Wedding Photos
	$('.jcarousel').jcarousel();

	$('#left-slider-arrow').click(function() {
		$('.jcarousel').jcarousel('scroll', '-=1');
	});

	$('#right-slider-arrow').click(function() {
		$('.jcarousel').jcarousel('scroll', '+=1');
	});

});