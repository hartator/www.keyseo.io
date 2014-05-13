// 
//	Scripts for the theme, 
// 	slideshow is used for Home Alt #4 (index4.html)
// 	services is used for Services (services.html)
// 

$(function () {
	slideshow.initialize();

	services.initialize();
});

window.utils = {
	isFirefox: function () {
		return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	}
};

var services = {
	tabs: function () {
		$tabs = $("#services #tabs");
		$hexagons = $tabs.find(".hexagon");
		$sections = $tabs.find(".section");

		$hexagons.click(function () {
			$hexagons.removeClass("active");
			$(this).addClass("active");
			var index = $hexagons.index(this);
			$sections.fadeOut();
			$sections.eq(index).fadeIn();
		});
	},
	screenHover: function () {
		$screens = $("#features-hover .images img");
		$features = $("#features-hover .features .feature");
		$features.mouseenter(function () {
			if (!$(this).hasClass("active")) {
				$features.removeClass("active");
				$(this).addClass("active");
				var index = $features.index(this);
				$screens.stop().fadeOut();
				$screens.eq(index).fadeIn();
			}			
		});
	},
	initialize: function () {
		this.tabs();
		this.screenHover();
	}
}

var slideshow = {
	initialize: function () {
		var $slideshow = $(".slideshow"),
			$slides = $slideshow.find(".slide"),
			$btnPrev = $slideshow.find(".btn-nav.prev"),
			$btnNext = $slideshow.find(".btn-nav.next");

		var index = 0;
		var interval = setInterval(function () {
			index++;
			if (index >= $slides.length) {
				index = 0;
			}
			updateSlides(index);
		}, 4500);

		$btnPrev.click(function () {
			clearInterval(interval);
			interval = null;
			index--;
			if (index < 0) {
				index = $slides.length - 1;
			}
			updateSlides(index);
		});

		$btnNext.click(function () {
			clearInterval(interval);
			interval = null;
			index++;
			if (index >= $slides.length) {
				index = 0;
			}
			updateSlides(index);
		});

		$slideshow.hover(function () {
			$btnPrev.addClass("active");
			$btnNext.addClass("active");
		}, function () {
			$btnPrev.removeClass("active");
			$btnNext.removeClass("active");
		});


		function updateSlides(index) {
			$slides.removeClass("active");
			$slides.eq(index).addClass("active");
		}
	}
}