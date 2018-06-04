$(function(){
	$('.nav .nav-list').hover(function(){
		$(this).addClass('actives').siblings().removeClass('actives')
	}, function(){
		$('.nav_bar li').removeClass('actives').eq(0).addClass('actives')
	})
	/*导航栏*/
	$('.nav .nav-list').hover(function(){
		$(this).find('.nav-items').stop(true).slideDown(200);
	},function(){
		$(this).find('.nav-items').stop(true).slideUp(200);
	})
	$("#slider").easySlider( {
			slideSpeed: 800,
			paginationSpacing: "15px",
			paginationDiameter: "25px",
			paginationPositionFromBottom: "40px",
			slidesClass: ".slides",
			controlsClass: ".controls",
			paginationClass: ".pagination"					
	});
	
	$('#slider').hover(function(){
		$('.controls').fadeIn();
	},function(){
		$('.controls').fadeOut();
	})
	$('.controls li:first').hover(function(){
     	$(this).find('img').attr({
     		src:'./images/prev_ac.png'
     	})
	}, function(){
		$(this).find('img').attr({
     		src:'./images/prev.png'
     	})
	})
	$('.controls li:last').hover(function(){
     	$(this).find('img').attr({
     		src:'./images/next_ac.png'
     	})
	}, function(){
		$(this).find('img').attr({
     		src:'./images/next.png'
     	})
	})
	function setHeight(){
		var width = $('.show_list').width();
			$('.show_list').css({
			"height":width
		})
	}setHeight();
	window.onresize=function(){
		setHeight();
	}
	$('.show_list').hover(function(){
		$('.show_list').removeClass('animout');
	},function(){
		$(this).addClass('animout');
	})
	/*3D轮播*/
	'use strict';

	window.addEventListener('load', function () {
		var carousels = document.querySelectorAll('.carousel');

		for (var i = 0; i < carousels.length; i++) {
			carousel(carousels[i]);
		}
	});

	function carousel(root) {
		var figure = root.querySelector('figure'),
			nav = root.querySelector('nav'),
			images = figure.children,
			n = images.length,
			gap = root.dataset.gap || 0,
			bfc = 'bfc' in root.dataset,
			theta = 2 * Math.PI / n,
			currImage = 0;

		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
		window.addEventListener('resize', function () {
			setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
		});

		setupNavigation();

		function setupCarousel(n, s) {
			var apothem = s / (2 * Math.tan(Math.PI / n));

			figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';

			for (var i = 0; i < n; i++) {
				images[i].style.padding = gap + 'px';
			}for (i = 1; i < n; i++) {
				images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
				images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
			}
			if (bfc) for (i = 0; i < n; i++) {
				images[i].style.backfaceVisibility = 'hidden';
			}rotateCarousel(currImage);
		}

		function setupNavigation() {
			nav.addEventListener('click', onClick, true);

			function onClick(e) {
				e.stopPropagation();

				var t = e.target;
				if (t.tagName.toUpperCase() != 'BUTTON') return;

				if (t.classList.contains('next')) {
					currImage++;
				} else {
					currImage--;
				}

				rotateCarousel(currImage);
			}
		}

		function rotateCarousel(imageIndex) {
			figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
		}
	}
})