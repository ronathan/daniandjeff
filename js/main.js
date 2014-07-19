$(function(){

	// Animate navbar in
	var $ourStory = $('section#our-story'),
	$navbar = $('#navbar');

	$ourStory.waypoint(function(direction) {
		if(direction == "down") {
			$navbar.animate({opacity: "1"}, 200, "easeInOutExpo");
		} else {
			$navbar.animate({opacity: "0"}, 200, "easeInOutExpo");
		}
	}, { offset:100 });

	// Navbar Scroll Animations
	$('#navbar ul li').click(function() {
		var $section = $('section');
		var currentLink = $(this).attr('data-sectionNumber');
		$('body').stop().animate( { scrollTop : $section.eq( currentLink ).offset().top }, 650, 'easeInOutExpo');
	});

	$('.main-page-text').css('opacity', '1');
	$('.main-page-text').addClass('fadeInUp');

	// Image Slider for Wedding Photos

	// jCarousel initialization
	$('.jcarousel').jcarousel({
		wrap: 'both',
		transforms3d:true
	});

	// jCarousel arrow sliders
	$('#left-slider-arrow').click(function() {
		$('.jcarousel').jcarousel('scroll', '-=1');
	});

	$('#right-slider-arrow').click(function() {
		$('.jcarousel').jcarousel('scroll', '+=1');
	});

	// jCarousel pagination
	$('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  }).on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  }).jcarouselPagination();

  // Wedding Details More Info Nav
  $('.info-nav li').click(function() {
  	var $this = $(this);
  	if(!$this.hasClass('active')) {
	  	$('.info-nav li').removeClass('active');
	  	$this.addClass('active');

	  	$('#wedding-details .more-info-content .content-item').fadeOut(100);
	  	$('#content' + $this.attr('data-contentitem')).delay(100).fadeIn(100);
  	}
  });

});