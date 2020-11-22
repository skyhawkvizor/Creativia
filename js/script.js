// $(function () {

// ******************** HEADER ***********************

$('.nav__item').on('mouseenter', function (e) {
	$('.nav__item').removeClass('active')
	$(this).addClass('active')
})

$('.burger').on('click', function (e) {
	$(this).toggleClass('active')
	$('.nav').toggleClass('open')
	$('.body').toggleClass('fixed')
})

$(window).setBreakpoints({
	distinct: true,
	breakpoints: [
		984,
		884,
		784,
		684,
		600
	]
});

$(window).bind('enterBreakpoint600', function () {
	$('.burger').removeClass('active')
	$('.nav').removeClass('open')
	$('.body').removeClass('fixed')
});




// $(window).on('resize', function () {
// 	console.log(2)
// });


// ******************** SLIDER ***********************




$('.slider').slick({
	prevArrow: $('.slider-section__button_prev'),
	nextArrow: $('.slider-section__icon_next'),
	infinite: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				prevArrow: null,
				nextArrow: null
			}
		}
	]
})

// function arrow(event, slick, currentSlide, nextSlide) {
// 	let prev = $('.slider-section__button_prev')
// 	let next = $('.slider-section__icon_next')

// if (nextSlide === 0) {
// 	prev.addClass('last');
// 	// next.addClass('last');
// }
// if (nextSlide === slick.slideCount - 1) {
// 	next.addClass('last');
// 	// prev.addClass('last');
// }
// if (currentSlide === 0) {
// 	prev.addClass('last');
// 	// next.removeClass('last');
// }
// if (currentSlide === slick.slideCount - 1) {
// 	next.addClass('last');
// 	// prev.removeClass('last');

// }

// if (nextSlide === 0) {
// 	prev.hide();
// }
// if (nextSlide === slick.slideCount - 1) {
// 	next.hide();
// }
// if (currentSlide === 0) {
// 	prev.show();
// }
// if (currentSlide === slick.slideCount - 1) {
// 	next.show();
// }
// console.log(slick.slideCount)

// prev.removeClass('last');
// prev.removeClass('last');

// if (nextSlide === 0) {
// 	console.log(1)
// 	// prev.hide();
// 	prev.addClass('last')
// }
// if (nextSlide === slick.slideCount - 1) {
// 	console.log(2)
// 	next.hide();
// next.addClass('last')
// }
// if (currentSlide === 0) {
// 	// prev.show();
// 	prev.removeClass('last');
// }
// if (currentSlide === slick.slideCount - 1) {
// 	// next.show();
// 	next.removeClass('last');
// }
// }


// $('.slider').on('beforeChange', arrow);
// arrow()


// ******************** ABOUT ***********************


$('.accordion__title').on('click', function (e) {
	let parent = $(e.target).parents('.accordion__item')
	let title = parent.find('.accordion__title')
	let button = parent.find('.accordion__button')
	let text = parent.find('.accordion__description')

	let titles = $('.accordion__title')
	let buttons = $('.accordion__button')
	let texts = $('.accordion__description')

	if (!title.hasClass('open')) {
		titles.removeClass('open')
		title.addClass('open')
		buttons.removeClass('open')
		button.addClass('open')
		texts.stop(true).slideUp(300, 'linear', function () {
			$(this).removeClass('open')
		})
		text.stop(true).slideDown(300, 'linear', function () {
			$(this).addClass('open')
		})
	}
})


$('.about-item').on('mouseenter', function (e) {

	let parent;
	if ($(e.target).hasClass('about-item')) {
		parent = $(e.target)
	} else {
		parent = $(e.target).parents('.about-item')
	}
	let bigIcon = parent.find('.hexagon__icon_big')
	let smallIcon = parent.find('.hexagon__icon_small')

	if (!bigIcon.hasClass('activ')) {
		bigIcon.addClass('active')
		smallIcon.addClass('active')
	}
})

$('.about-item').on('mouseleave', function (e) {
	let bigIcons = $('.about-item .hexagon__icon_big')
	let smallIcons = $('.about-item .hexagon__icon_small')

	bigIcons.removeClass('active')
	smallIcons.removeClass('active')
})



// ******************** PORTFOLIO ***********************


$('.portfolio-section__menu-link').on('mouseenter', function (e) {
	let current = $(e.target)
	$('.portfolio-section__menu-link').removeClass('hover')
	current.addClass('hover')
})
$('.portfolio-section__menu-link').on('mouseleave', function (e) {
	$('.portfolio-section__menu-link').removeClass('hover')
})

$('.portfolio-content__item').on('mouseenter', function (e) {
	let current = $(e.target)
	current.addClass('show')
})
$('.portfolio-content__item').on('mouseleave', function (e) {
	let current = $(e.target)
	current.removeClass('show')
})


// ******************** FEATURES ***********************


$('.features-menu__item').on('mouseenter', function (e) {
	let parent;
	if ($(e.target).hasClass('features-menu__item')) {
		parent = $(e.target)
	} else {
		parent = $(e.target).parents('.features-menu__item')
	}

	let bigIcon = parent.find('.hexagon__icon_big')
	let smallIcon = parent.find('.hexagon__icon_small')
	let text = parent.find('.features-menu__text')
	let item = parent

	if (!bigIcon.hasClass('hover')) {
		bigIcon.addClass('hover')
		smallIcon.addClass('hover')
		text.addClass('hover')
		item.addClass('hover')
	}
})

$('.features-menu__item').on('mouseleave', function (e) {
	let bigIcons = $('.features-menu__item .hexagon__icon_big')
	let smallIcons = $('.features-menu__item .hexagon__icon_small')
	let texts = $('.features-menu__item .features-menu__text')
	let items = $('.features-menu__item')

	bigIcons.removeClass('hover')
	smallIcons.removeClass('hover')
	texts.removeClass('hover')
	items.removeClass('hover')
})



// ******************** CLIENTS ***********************

$('.clients-slider').slick({
	arrows: false,
	dots: true,
	infinite: true,
	autoplay: true,
})

// ******************** TEAMWORK ***********************

$('.team-list__item').on('mouseenter', function (e) {
	let parent;
	if ($(e.target).hasClass('team-list__item')) {
		parent = $(e.target)
	} else {
		parent = $(e.target).parents('.team-list__item')
	}

	let cover = parent.find('.team-list__cover')
	let title = parent.find('.team-list__item-name')

	if (!cover.hasClass('hover')) {
		cover.addClass('hover')
		title.addClass('hover')

	}
})

$('.team-list__item').on('mouseleave', function (e) {
	let covers = $('.team-list__item .team-list__cover')
	let titles = $('.team-list__item .team-list__item-name')

	covers.removeClass('hover')
	titles.removeClass('hover')

})


// ******************** SERVICES ***********************


$('.service-list__service').on('mouseenter', function (e) {

	let parent;
	if ($(e.target).hasClass('service-list__service')) {
		parent = $(e.target)
	} else {
		parent = $(e.target).parents('.service-list__service')
	}
	let bigIcon = parent.find('.hexagon__icon_big')
	let smallIcon = parent.find('.hexagon__icon_small')
	let bg = parent.find('.service__text')

	if (!bigIcon.hasClass('hover')) {
		bigIcon.addClass('hover')
		smallIcon.addClass('hover')
		bg.addClass('hover')
	}
})

$('.service-list__service').on('mouseleave', function (e) {
	let bigIcons = $('.service-list__service .hexagon__icon_big')
	let smallIcons = $('.service-list__service .hexagon__icon_small')
	let bgs = $('.service__text')

	bigIcons.removeClass('hover')
	smallIcons.removeClass('hover')
	bgs.removeClass('hover')

})

// ******************** FOLLOW ***********************


$('.follow-links__item').on('mouseenter', function (e) {

	let parent;
	if ($(e.target).hasClass('follow-links__item')) {
		parent = $(e.target)
	} else {
		parent = $(e.target).parents('.follow-links__item')
	}
	let bigIcon = parent.find('.hexagon__icon_big')
	let smallIcon = parent.find('.hexagon__icon_small')

	if (!bigIcon.hasClass('hover')) {
		bigIcon.addClass('hover')
		smallIcon.addClass('hover')
	}
})

$('.follow-links__item').on('mouseleave', function (e) {
	let bigIcons = $('.follow-links__item .hexagon__icon_big')
	let smallIcons = $('.follow-links__item .hexagon__icon_small')

	bigIcons.removeClass('hover')
	smallIcons.removeClass('hover')

})

// });



// ******************** MAP ***********************


var overlay;
var gmap;

// function initMap() {
// 	var myLatLng = new google.maps.LatLng(54.42347312628039, 18.58439486416992);
// 	var mapOptions = {
// 		zoom: 14,
// 		center: myLatLng,
// 		mapTypeId: google.maps.MapTypeId.READMAP,
// 		zoomControl: false,
// 		rotateControl: false,
// 		streetViewControl: false,
// 		fullscreenControl: false,
// 		mapTypeControl: false,
// 		draggble: true,
// 		zoomControl: false,
// 		// scaleControl: true,
// 		// restriction: {
// 		// 	latLngBounds: {
// 		// 		north: -10,
// 		// 		south: -40,
// 		// 		east: 160,
// 		// 		west: 100,
// 		// 	},
// 		// },

// 	};

// 	gmap = new google.maps.Map(document.querySelector('.section-map__map'), mapOptions);

// 	function HTMLMarker(lat, lng) {
// 		this.lat = lat;
// 		this.lng = lng;
// 		this.pos = new google.maps.LatLng(lat, lng);
// 	}

// 	HTMLMarker.prototype = new google.maps.OverlayView();
// 	HTMLMarker.prototype.onRemove = function () { }

// 	const html = 'egypt, creativia\n' +
// 		'Address: cairo 123\n' +
// 		'Phone: +0201091915171\n' +
// 		'Email: gfx3mr@gmail.com\n'

// 	//init your html element here
// 	HTMLMarker.prototype.onAdd = function () {
// 		adress = document.createElement('adress');
// 		adress.className = "section-map__adress";
// 		adress.innerHTML = html;
// 		div = document.createElement('div');
// 		div.className = "section-map__marker";
// 		div.appendChild(adress);
// 		var panes = this.getPanes();
// 		panes.overlayImage.appendChild(div);
// 	}

// 	HTMLMarker.prototype.draw = function () {
// 		var overlayProjection = this.getProjection();
// 		var position = overlayProjection.fromLatLngToDivPixel(this.pos);
// 		var panes = this.getPanes();
// 		panes.overlayImage.style.left = position.x - 235 + 'px';
// 		panes.overlayImage.style.top = position.y - 223 + 'px';
// 	}

// 	//to use it
// 	var htmlMarker = new HTMLMarker(54.412870202909744, 18.56750317684111);
// 	htmlMarker.setMap(gmap);

// }



function initMap() {
	var myLatLng = new google.maps.LatLng(54.412870202909744, 18.56750317684111);
	var mapOptions = {
		zoom: 14,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.READMAP,
		zoomControl: false,
		rotateControl: false,
		streetViewControl: false,
		fullscreenControl: false,
		mapTypeControl: false,
		draggble: true,
		zoomControl: false,
		// scaleControl: true,
		// restriction: {
		// 	latLngBounds: {
		// 		north: -10,
		// 		south: -40,
		// 		east: 160,
		// 		west: 100,
		// 	},
		// },

	};

	gmap = new google.maps.Map(document.querySelector('.section-map__map'), mapOptions);

	function HTMLMarker(lat, lng) {
		this.lat = lat;
		this.lng = lng;
		this.pos = new google.maps.LatLng(lat, lng);
	}

	HTMLMarker.prototype = new google.maps.OverlayView();
	HTMLMarker.prototype.onRemove = function () { }

	const html = 'egypt, creativia\n' +
		'Address: cairo 123\n' +
		'Phone: +0201091915171\n' +
		'Email: gfx3mr@gmail.com\n'

	//init your html element here
	HTMLMarker.prototype.onAdd = function () {
		adress = document.createElement('adress');
		adress.className = "section-map__adress";
		adress.innerHTML = html;
		div = document.createElement('div');
		div.className = "section-map__marker";
		div.appendChild(adress);
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}

	HTMLMarker.prototype.draw = function () {
		var overlayProjection = this.getProjection();
		var position = overlayProjection.fromLatLngToDivPixel(this.pos);
		var panes = this.getPanes();
		panes.overlayImage.style.left = position.x - 235 + 'px';
		panes.overlayImage.style.top = position.y - 223 + 'px';
	}

	//to use it
	var htmlMarker = new HTMLMarker(54.412870202909744, 18.56750317684111);
	htmlMarker.setMap(gmap);



}



// var myLatLng = 54.42347312628039, 18.58439486416992;

$(window).bind('enterBreakpoint984', function () {
	console.log('e984')
	gmap.panBy(217, -185)
});
$(window).bind('exitBreakpoint984', function () {
	console.log('x984')
	gmap.panBy(-217, 185)
});
$(window).bind('enterBreakpoint884', function () {
	console.log('e884')
	gmap.panBy(200, -165)
});
$(window).bind('exitBreakpoint884', function () {
	console.log('x884')
	gmap.panBy(-200, 165)
});
$(window).bind('enterBreakpoint784', function () {
	console.log('e784')
	gmap.panBy(170, -145)
});
$(window).bind('exitBreakpoint784', function () {
	console.log('x784')
	gmap.panBy(-170, 145)
});
$(window).bind('enterBreakpoint684', function () {
	console.log('e684')
	gmap.panBy(140, -135)
});
$(window).bind('exitBreakpoint684', function () {
	console.log('x684')
	gmap.panBy(-140, 135)
});


// map.setCenter(mymarker.getPoint());
