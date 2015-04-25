$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '80%'
	});
        
	$('.wp2_1').waypoint(function() {
		$('.wp2_1').addClass('animated fadeInDown');
	}, {
		offset: '80%'
	});
        $('.wp2_2').waypoint(function() {
		$('.wp2_2').addClass('animated fadeInDown');
	}, {
		offset: '80%'
	});
        $('.wp2_3').waypoint(function() {
		$('.wp2_3').addClass('animated fadeInDown');
	}, {
		offset: '80%'
	});
        
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated bounceInDown');
	}, {
		offset: '80%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '80%'
	});
        

	/***************** Flickity ******************/

        $('#homeSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
                autoPlay: 5000
	}); 
	$('#featuresSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
                autoPlay: 3000
	});

	$('#showcaseSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
                autoPlay: 3000,
		imagesLoaded: true
	});

	/***************** Fancybox ******************/

	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

});

$(document).ready(function() {
	$("a.single_image").fancybox({
		padding: 4,
	});
});




$(document).ready(function() {
	$(".col-md-4").hover(
                function(){
                    $(this).find("img").css({
                        "-webkit-transition-duration": "0.7s",
                        "-moz-transition-duration": "0.7s",
                        "-0-transition-duration": "0.7s",
                        "transition-duration": "0.7s" /* For modern browsers(CSS3)  */
                    });
                    $(this).find("img").css({
                        "-webkit-transform": "rotate(360deg)",
                        "-moz-transform": "rotate(360deg)",
                        "-o-transform": "rotate(360deg)",
                        "transform": "rotate(360deg)" /* For modern browsers(CSS3)  */
                    });
                }, function(){
                    $(this).find("img").css({
                        "-webkit-transition-duration": "0.7s",
                        "-moz-transition-duration": "0.7s",
                        "-0-transition-duration": "0.7s",
                        "transition-duration": "0.7s" /* For modern browsers(CSS3)  */
                    });
                    $(this).find("img").css({
                        "-webkit-transform": "rotate(0deg)",
                        "-moz-transform": "rotate(0deg)",
                        "-o-transform": "rotate(0deg)",
                        "transform": "rotate(0deg)" /* For modern browsers(CSS3)  */
                    });
                }
        );
});


/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 2000);
			return false;
		}
	}
});
