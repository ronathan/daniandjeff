$(function(){

	// Animate navbar in
	var $ourStory = $('section#our-story'),
	$navbar = $('#navbar');

	$ourStory.waypoint(function(direction) {
		if(direction == "down") {
			$navbar.css("position", "fixed");
			// $navbar.animate({opacity: "1"}, 200, "easeInOutExpo");
		} else {
			$navbar.css("position", "relative");
			// $navbar.animate({opacity: "0"}, 200, "easeInOutExpo");
		}
	}, { offset:120 });

	// Navbar Scroll Animations
	$('#navbar ul li').click(function() {
		var $section = $('section');
		var currentLink = $(this).attr('data-sectionNumber');
		$('body').stop().animate( { scrollTop : ( $section.eq( currentLink ).offset().top - 50) }, 650, 'easeInOutExpo');
	});

	var $ourStoryItem = $("#our-story").find(".our-story-item");

	// Animates the bubble on scroll
	function animateStoryItem($ourStoryItem) {
		if ($ourStoryItem.css("opacity") == 0) {
			var $heading = $ourStoryItem.find("h2"),
			$image = $ourStoryItem.find(".our-story-img"),
			$description = $ourStoryItem.find("p"),
			$h3 = $ourStoryItem.find("h3"),
			$storyArrow = $ourStoryItem.find("img.story-arrow");

			// Show the story item
			$ourStoryItem.css("opacity", 1);

			//Animate header
			$heading.addClass("bounceInUp");


			if( $ourStoryItem.hasClass("spinposal") ) {
				$image.addClass("bounceInLeft");
				$description.addClass("bounceInRight");
			} else {
				$image.addClass("bounceInUp");
				$description.addClass("bounceIn");
			}

			if( $ourStoryItem.hasClass("arrowAnimation") ) {
				if( $ourStoryItem.hasClass("right") ) {
					$h3.addClass("bounceInRight");
					$storyArrow.addClass("bounceInRight");
				} else {
					$h3.addClass('bounceInLeft');
					$storyArrow.addClass('bounceInLeft');
					$('img#circle-jeff').addClass('bounceIn');
				}
			}

		}
	}

	// Sets up waypoint on bubble
	$ourStoryItem.waypoint({
		handler: function() {
			animateStoryItem($(this));
		},
		offset: function() {
    	return $(window).height() * 0.7;
    }
	});

	// Causes Main Page Text to fade in on entry
	$('.main-page-text').css('opacity', '1');
	$('.main-page-text').addClass('animated fadeInUp');

	$navbar.addClass('animated fadeInUp');
	$navbar.css('opacity', '1');

	setTimeout(function() {
		$('body').css("overflow-y", "visible");
	}, 3000);

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
  // $('.info-nav li').click(function() {
  // 	var $this = $(this);
  // 	if(!$this.hasClass('active')) {
	 //  	$('.info-nav li').removeClass('active');
	 //  	$this.addClass('active');

	 //  	$('#wedding-details .more-info-content .content-item').fadeOut(100);
	 //  	$('#content' + $this.attr('data-contentitem')).delay(100).fadeIn(100);
  // 	}
  // });

});