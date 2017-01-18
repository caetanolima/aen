var gallery_list = false;
var gallery_list_blue = false;

jQuery(document).ready(function(jQuery) {

	// Menu with Push
	new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), {
		type : 'cover'
	} );


	//Acessibilidade
	jQuery(document).keypress(function(e) {
		if (jQuery(e.target).is('input, textarea')) {
			return;
		}
		if(e.which == 49) {
			btn1();
		}
		else if(e.which == 50) {
			btn2();
		}
		else if(e.which == 51) {
			btn3();
		}
		else if(e.which == 52) {
			btn4();
		}
		else if(e.which == 53) {
			btn5();
		}else if(e.which == 54) {
			btn6();
		}
	});

	jQuery('.btn1').click( function() {
		btn1();
		return false;
	});

	jQuery('.btn2').click( function() {
		btn2();
		return false;
	});

	jQuery('.btn3').click( function() {
		btn3();
		return false;
	});
	jQuery('.btn4').click( function() {
		btn4();
		return false;
	});
	jQuery('.btn5').click( function() {
		btn5();
		return false;
	});
	jQuery('.btn6').click( function() {
		btn6();
		return false;
	});

	// Home
	var $agenda = jQuery('.owl-carousel-agenda');

	$agenda.owlCarousel({
		loop: 		true,
		autoWidth: 	true,
		items: 		1,
		margin: 	8,
		onInitialized : function (argument) {
			var equal = 0;
			$agenda.find('dd').each(function(index, el) {
				if (equal < jQuery(this).height()) {
					equal = jQuery(this).height();
				}
			});
			$agenda.find('dd').height(equal);
		}
	});

	jQuery('.owl-carousel-agenda-next').on('click', function(event) {
		event.preventDefault();
		$agenda.trigger('next.owl.carousel');
	});

	jQuery(".owl-carousel-videos-list").owlCarousel({
		items: 		5,
		loop: 		true,
		nav: 		true,
		navText: 	['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

	jQuery(".owl-carousel-aviso-pauta").owlCarousel({
      	items: 		1,
      	dots: true,
      	slideSpeed : 2000,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});

	jQuery(".owl-carousel-videos-highlight").owlCarousel({
		loop: 		true,
		nav: 		true,
		navText: 	['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});

	// Header Reduzido
	jQuery(window).bind('scroll', header_reduced);

	// Back Top
	jQuery('.to-top').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Functions
	news_mansory()
	inner_single_aside();
	carousel_mobile();

	// Functons Resize Window
	window.onresize = function() {
		news_mansory();
		inner_single_aside();
		carousel_mobile();
	}

	//Tooltip
	jQuery('[data-toggle="tooltip"]').tooltip();

	//VIDEO INTERNA
	jQuery('.video-show').find('.show-more').click(function () {
		jQuery(this).hide();
		jQuery(this).prev('div.description').addClass('showed');
		return false;
	});

	//CADASTRO NEWSLETTER
	var checkItem = jQuery('.editorias li');
	jQuery(checkItem).click(function(){
		if(jQuery(this).hasClass('selected')){
			jQuery(this).children('input').prop("checked", false);
			jQuery(this).removeClass('selected');

		}else{
			jQuery(this).children('input').prop("checked", true);
			jQuery(this).addClass('selected');
		}
	});

	//Galeria Interna
	var galeriaSlide = jQuery(".gallery-slide");
	var galeriaThumbs = jQuery(".gallery-thumbs");
	var slidesPerPage = 6; //globaly define number of elements per page
	var syncedSecondary = true;

	galeriaSlide.owlCarousel({
		items : 1,
		slideSpeed : 2000,
		nav: true,
		autoplay: true,
		dots: true,
		loop: true,
		responsiveRefreshRate : 200,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		}).on('changed.owl.carousel', syncPosition);

	galeriaThumbs
		.on('initialized.owl.carousel', function () {
			galeriaThumbs.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
		items : slidesPerPage,
		dots: true,
		nav: true,
		smartSpeed: 200,
		slideSpeed : 500,
		slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);

	function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		//var current = el.item.index;
		//if you disable loop you have to comment this block
		var count = el.item.count-1;
		var current = Math.round(el.item.index - (el.item.count/2) - .5);

		if(current < 0) {
		  current = count;
		}
		if(current > count) {
		  current = 0;
		}

	galeriaThumbs
		.find(".owl-item")
		.removeClass("current")
		.eq(current)
		.addClass("current");
	var onscreen = galeriaThumbs.find('.owl-item.active').length - 1;
	var start = galeriaThumbs.find('.owl-item.active').first().index();
	var end = galeriaThumbs.find('.owl-item.active').last().index();

	if (current > end) {
		galeriaThumbs.data('owl.carousel').to(current, 100, true);
	}
	if (current < start) {
		galeriaThumbs.data('owl.carousel').to(current - onscreen, 100, true);
	}
}

function syncPosition2(el) {
	if(syncedSecondary) {
		var number = el.item.index;
		galeriaSlide.data('owl.carousel').to(number, 100, true);
	}
}

	galeriaThumbs.on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = jQuery(this).index();
		galeriaSlide.data('owl.carousel').to(number, 300, true);
	});
});


function news_mansory() {

	var bodyWidth = jQuery('body').width();
	var container = jQuery('.list-news-column');

	if( bodyWidth > 480 ) {

		container.masonry({
			itemSelector: '.grid-item',
		});

	} else {

		if(container.masonry()) {
			container.masonry( 'destroy' );
		}

	}

}

function inner_single_aside() {
	var bodyWidth = jQuery('body').width();
	var $height = jQuery(".inner-news article").height();
	if ( bodyWidth > 768 && $height) {
		var $mais = jQuery(".inner-news aside .mais-noticias").height();
		jQuery(".inner-news aside").css({
			"min-height": $height,
			"padding-bottom": $mais
		});
	} else {
		jQuery(".inner-news aside").css({
			"min-height": "auto",
			"padding-bottom": "0"
		});
	}
}

function carousel_mobile() {

	var $width = jQuery(window).width(),
		gallery = jQuery(".item-photos .gallery");
		gallery_blue = jQuery(".noticias-with-blue .gallery");

	if ($width < 768) {

		gallery.addClass('owl-carousel');
		gallery_list = gallery.owlCarousel({
			loop: 		false,
			nav: 		false,
			items: 		2
		});

		gallery_blue.addClass('owl-carousel');
		gallery_list_blue = gallery_blue.owlCarousel({
			loop: 		false,
			nav: 		false,
			responsive:{
				0: {
					items: 1
				},
				480: {
					items: 2
				}
			}
		});

	} else {
		if (gallery.hasClass('owl-carousel') || gallery_blue.hasClass('owl-carousel')) {

			gallery_list.trigger('destroy.owl.carousel');
			gallery_list = false;
			gallery.removeClass('owl-carousel');

			gallery_list_blue.trigger('destroy.owl.carousel');
			gallery_list_blue = false;
			gallery_blue.removeClass('owl-carousel');
		}
	}

}

function header_reduced(event) {
	var bodyWidth = jQuery('body').width();
	var st = jQuery(this).scrollTop();
	if ( bodyWidth >= 768 ) {
		if ( st <= 200 ) {
			jQuery('header.reduced').fadeOut();
		} else {
			jQuery('header.reduced').fadeIn();
		}
	}
}

function btn1() {
	var conteudoStart = (jQuery(".header-main-navigation").offset().top) + 46;
	jQuery('html, body').animate({
		scrollTop: conteudoStart
	}, 500);
}

function btn2() {
	jQuery('html, body').animate({
		scrollTop: jQuery(".header-main-navigation").offset().top
	}, 500);
}

function btn3() {
	jQuery('html, body').animate({
		scrollTop: jQuery("footer.footer-main").offset().top
	}, 1000);
}

function btn4() {
	location.href = 'http://www.aen.pr.gov.br/acessibilidade.php';
}

function btn5() {
	jQuery("body").toggleClass("dark");
}

function btn6() {
	jQuery("body").toggleClass("resize-fonts");
}