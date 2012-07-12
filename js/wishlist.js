$(document).ready(function() {
	var animationTimespan = 500;
	
	setupBindings(animationTimespan);
	
	setupMasks();
	
	setupValidation();
});

function setupMasks() {
	/*$('input.zip').mask('99999');
	$('input.phone').mask('(999) 999 - 9999');*/
}

function setupBindings(animationTimespan) {
	$('span.home').on('click', function() {
		var $link = $(this);
		
		$('html, body').animate({
			scrollTop: $('div.homepage').offset().top
			}, animationTimespan, function() { 
					changeToolbarColor('home'); 
					changeActiveLink($link);
				});
	});
	
	$('button.iphoneDownload').on('click', function() {
		window.location = 'http://itunes.apple.com/us/app/my-wish-lists/id522681408?mt=8';
	});
	
	$('span.features').on('click', function() {
		var $link = $(this);
		
		$('html, body').animate({
			scrollTop: $('div.featurespage').offset().top
			}, animationTimespan, function() { 
					changeToolbarColor('features'); 
					changeActiveLink($link);
				});
	});
	
	$('span.videos').on('click', function() {
		var $link = $(this);
		
		$('html, body').animate({
			scrollTop: $('div.videopage').offset().top
			}, animationTimespan, function() { 
					changeToolbarColor('videos'); 
					changeActiveLink($link);
				});
	});
	
	$(document).on('scroll', function(evt) {
		var $header = $('header'),
			yPos = $header.offset().top,
			topOfFeatures = 1120,
			botOfFeatures = 2250,
			isHomePage = yPos <= topOfFeatures,
			isFeaturesPage = yPos >= topOfFeatures && yPos < botOfFeatures,
			isVideosPage = yPos >= botOfFeatures;
		
		if(isHomePage) {
			changeActiveLink($('span.home'));
			$header.removeClass('light');
		} else if(isFeaturesPage) {
			changeActiveLink($('span.features'));
			$header.addClass('light');
		} else if(isVideosPage) {
			changeActiveLink($('span.videos'));
			$header.removeClass('light');
		}
	});
	
	/*$('div.contactpage button').on('click', function(ev) {
		ev.preventDefault();
		
		contactSubmitHandler();
		
		return false;
	});*/
}

function changeToolbarColor(section) {
	if(section == "features") {
		$('header').addClass('light');
	} else {
		$('header').removeClass('light');
	}
}

function changeActiveLink($link) {
	$('header span.active').removeClass('active');
	$link.addClass('active');
}

function setupValidation() {
	/*$('div.contactpage form').validate({
		rules: {
			first: "required",
			last: "required",
			address: "required",
			city: "required",
			state: "required",
			zip: "required",
			phone: "required",
			email: "required email",
			message: "required"
		},
		errorClass: 'invalid',
		errorPlacement: function(error, element) {
			//no-op
		}
	});*/
}

function contactSubmitHandler() {
	/*var $form = $('div.contactpage form');
	
	if($form.valid()) {
		alert('Yay valid');
	} else {
		return false;
	}*/
}