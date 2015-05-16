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
        
        
        $('.otherSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
                autoPlay: 3000
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

$(document).ready(function () {
    $("a.single_image").fancybox({
        padding: 4,
    });
});




$(document).ready(function() {
	$(".col-md-4").hover(
                function(){
                    $(this).find("img").css({
                        "-webkit-transition-duration": "1s",
                        "-moz-transition-duration": "1s",
                        "-0-transition-duration": "1s",
                        "transition-duration": "1s" /* For modern browsers(CSS3)  */
                    });
                    $(this).find("img").css({
                        "-webkit-transform": "rotate(360deg)",
                        "-moz-transform": "rotate(360deg)",
                        "-o-transform": "rotate(360deg)",
                        "transform": "rotate(360deg)" /* For modern browsers(CSS3)  */
                    });
                }, function(){
                    $(this).find("img").css({
                        "-webkit-transition-duration": "1s",
                        "-moz-transition-duration": "1s",
                        "-0-transition-duration": "1s",
                        "transition-duration": "1s" /* For modern browsers(CSS3)  */
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





//viruksham custom functions



$(document).ready(function () {
    
    //initializing google maps
    constructGoogleMap();
    
    
    //initializing contact pop up
    $('#my_popup').popup({transition: 'all 0.3s'});
    
    
    initializeEmail();
    
    //initializing facebook
    
//    window.fbAsyncInit = function () {
//        FB.init({
//            appId: '1480878908808692',
//            xfbml: true,
//            version: 'v2.1'
//        });
//        constructFacebookFeeds();
//    };
//
//    (function (d, s, id) {
//        var js, fjs = d.getElementsByTagName(s)[0];
//        if (d.getElementById(id)) {
//            return;
//        }
//        js = d.createElement(s);
//        js.id = id;
//        js.src = "//connect.facebook.net/en_US/sdk.js";
//        fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
//    
    
    
    window.fbAsyncInit = function () {
        FB.init({
            appId: '895186287191090',
            xfbml: true,
            version: 'v2.3'
        });
        constructFacebookFeeds();
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


});



function constructGoogleMap()
{
    
    // Set the initial Lat and Long of the Google Map
    if (window.google && window.google.maps) {
        try
        {
            //8.715779, 77.755515
            //8.714088, 77.755284
            var regisOffLL = new google.maps.LatLng(8.715779, 77.755515);
            var newOffLL = new google.maps.LatLng(8.714088, 77.755284);
            // Google Map options
            var myOptions = {
                zoom: 18,
                center: newOffLL,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
//                disableDefaultUI: true
            };

            // Create the Google Map, set options
            var map = new google.maps.Map(document.getElementById("addressMap"), myOptions);
            
            
            
            
            
            
            //marker for registered Office
            var regisOffMarker = new google.maps.Marker({
                position: regisOffLL,
                map: map,
                animation: google.maps.Animation.DROP
            });
            
            var regiOffAddress = '<div>';
            regiOffAddress += '     <div style="  font-weight: bold;">Registered Office:</div> ';
            regiOffAddress += '     <div>55, Sivan Kovil Street</div>   ';
            regiOffAddress += '     <div>Tirunelveli DT</div>   ';
            regiOffAddress += '     <div>TamilNadu</div> ';
            regiOffAddress += '</div>';
            var regiOffIW = new google.maps.InfoWindow({
                content: regiOffAddress,
                maxWidth: 200
            });
            
            
            google.maps.event.addListener(regisOffMarker, 'click', function() {
                if (regiOffIW && regiOffIW.getMap())
                    regiOffIW.close();
                else if (regiOffIW)
                    regiOffIW.open(map, regisOffMarker);
            });
            
            
            
            
            
            
            //marker for new office
            var newOffMarker = new google.maps.Marker({
                position: newOffLL,
                map: map
            });
            
            
            var newOffAddress = '<div>';
            newOffAddress += '     <div style="  font-weight: bold;">New Office:</div> ';
            newOffAddress += '     <div>Building 1st Floor,</div>   ';
            newOffAddress += '     <div>Beside Green’s Complex,</div>   ';
            newOffAddress += '     <div>Opp Kamarajar Statue, South Main Road,</div> ';
            newOffAddress += '     <div>Vallioor – 627 117</div> ';
            newOffAddress += '     <div>Tirunelveli DT, TamilNadu</div> ';
            newOffAddress += '</div>';
            var newOffIW = new google.maps.InfoWindow({
                content: newOffAddress,
                maxWidth: 200
            });
            
            
            google.maps.event.addListener(newOffMarker, 'click', function() {
                if (newOffIW && newOffIW.getMap())
                    newOffIW.close();
                else if (newOffIW)
                    newOffIW.open(map, newOffMarker);
            });
            
            
            
            
            
            

            setTimeout(function(){ 
                regiOffIW.open(map, regisOffMarker); 
                newOffIW.open(map, newOffMarker); 
            }, 300);
        }
        catch (err) {
            console.log("constructGoogleMap error:" + err);
        }
    }
}




function constructFacebookFeeds()
{
//    var FEED_URL = "https://www.facebook.com/feeds/page.php?format=rss20&id=1430802810470529";
//419634484771732
    var FEED_URL = "https://www.wallflux.com/feed/419634484771732";
    $.ajax({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
        dataType: 'json',
        async: true,
        success: function (data) {
            if (data.responseData.feed && data.responseData.feed.entries) {
                var content = "";

                content += '<div class="fb-like-box" data-href="https://www.facebook.com/VirukshamGroups" data-width="500" data-height="300" data-colorscheme="light" data-show-faces="true" data-header="true" data-stream="false" data-show-border="true"></div>';
                content += '<div>&nbsp;</div>';
                for (i = 0; i < data.responseData.feed.entries.length; i++)
                {
                    var url = data.responseData.feed.entries[i].link;
                    content += '<div class="fb-post" data-href="' + url + '" data-width="500">';
                    content += '</div>';
                    content += '<div>&nbsp;</div>';
                }
            }
            $("#feedsDiv").html(content);
        }
    });
}



function is_email(email) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailReg.test(email);
} 

function initializeEmail()
{
    $('.thirdRowContactDiv').click(function () {
        if(!$("#emailName").val())
        {
            $("#emailResponseText").html("Name is mandatory...");
            $("#emailResponseText").css("color","red");
            return;
        }
        else if(!$("#emailFrom").val())
        {
            $("#emailResponseText").html("Email Address is mandatory...");
            $("#emailResponseText").css("color","red");
            return;
        }
        else if(!is_email($("#emailFrom").val()))
        {
            $("#emailResponseText").html("Please enter valid email address...");
            $("#emailResponseText").css("color","red");
            return;
        }
        else if(!$("#emailMobile").val())
        {
            $("#emailResponseText").html("Mobile Number is mandatory...");
            $("#emailResponseText").css("color","red");
            return;
        }
        else if(!$("#emailContent").val())
        {
            $("#emailResponseText").html("Please type some content...");
            $("#emailResponseText").css("color","red");
            return;
        }
            
        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'S2tn5UN3pAf6tFAuk04vGA',
                'message': {
                    'from_email': $("#emailFrom").val(),
                    'to': [
                        {
                            'email': 'karthikarul20@gmail.com',
                            'name': 'Karthik',
                            'type': 'to'
                        },
                        {
                            'email': 'kalees87@gmail.com',
                            'name': 'Kaleesh',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': "Email from Viruksham Contact US Page - "+$("#emailName").val(),
                    'html': "Name: "+$("#emailName").val()+"<br>"+"Email: "+$("#emailFrom").val()+"<br>"+"Mobile: "+$("#emailMobile").val()+"<br>"+"Content: "+$("#emailContent").val()
                }
            },
            success: function (response) {
                if (response)
                {
                    $("#emailFrom").val("");
                    $("#emailName").val("");
                    $("#emailMobile").val("");
                    $("#emailCity").val("");
                    $("#emailContent").val("");
                    $("#emailResponseText").html("Thanks for contacting Viruksham. We will get back to you soon.");
                    $("#emailResponseText").css("color", "rgb(0, 237, 0)");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $("#emailResponseText").html("Network error. Please try again after some time...");
                $("#emailResponseText").css("color","red");
            },
            complete: function (jqXHR, textStatus) {
                
            }
        });
    });
}


