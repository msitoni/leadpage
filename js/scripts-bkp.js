( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/


	
	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).on('load', function(){



		/* Hide Loader  */



		$('.loader').fadeOut(200);



		/* Wow Init */



		if ($('.wow').length > 0) {
			var wow = new WOW({
			    offset: 150,          
			    mobile: false
			  }
			);
			wow.init();
		}

	});



	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/



	/* Fixed Navbar On Scroll */



	$('.js-navbar').affix({
	  offset: {
	    top: 50
	  }
	});


	$('.js-navbar').on('affix.bs.affix', function() {
		if (!$('.js-navbar').hasClass('affix')){
			$('.js-navbar').addClass('animated slideInDown');
		}
	});

	$('.js-navbar').on('affixed-top.bs.affix', function() {
	  	$('.js-navbar').removeClass('animated slideInDown');
	  	
	});



	/* Smooth Scroll To Anchor */



	$('.navigation ul li a, .mobile-menu ul li a').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - $('.js-navbar').outerHeight() + 1) 
            }, 1000);
            $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            return false;
        }
    });



	/* Scrollspy - Active Anchor Class On Scroll */



	$('body').scrollspy({
		offset: $('.js-navbar').outerHeight()
	});



	/*-------------------------------------------------------------------------------
	  Sidebar Menu
	-------------------------------------------------------------------------------*/


	function hideMenu(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
	}

	function showMenu(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	}
	
	$('.navbar-toggle').on('click',function(){
		showMenu();
	});



    /* Close Menu */



	$('.close-menu, .click-capture').on('click', function(){
		hideMenu();
		$('.menu-list ul').slideUp(300);
	});



	/*-------------------------------------------------------------------------------
	  Owl Carousel Init
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0){



		/* Project Carousel */



	   $('.project-carousel').owlCarousel({
		    dots:true,
		    margin:30,
		    smartSpeed:250,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        1200:{
		            items:3
		        },
		        1600:{
		            items:4
		        }
		    }
		});



		/* Client Carousel */



	    $('.client-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    nav:true,
		    navText:[],
		    dots:false,
		    autoHeight: true,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:1
		        },
		        992:{
		        	items:2
		        },
		        1200:{
		            items:2
		        }
		    }
		});



		/* Partner Carousel */


		  
	   $('.partner-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    dots:true,
		    autoplay:true,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:2
		        },
		        768:{
		            items:3
		        },
		        992:{
		        	items:4
		        },
		        1200:{
		        	items:5
		        }
		    }
		});



		/* Review Carousel */



	    $(".review-carousel").owlCarousel({
			responsive:{
		       0:{
		            items:1
		        },
		        720:{
		            items:1,
		            
		        },
		        1280:{
		            items:1
		        }
		    },
		    responsiveRefreshRate:0,
			nav:true,
			navText:[],
			animateIn: 'fadeIn',
		 	dots:false
		});

	}



    /*-------------------------------------------------------------------------------
	  Filter Project Carousel 
	-------------------------------------------------------------------------------*/



	$('.js-filter-carousel li a').on('click', function() {
		$('.js-filter-carousel .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.project-carousel').fadeOut(300);
		$('.project-carousel').fadeIn(300);
		setTimeout(function(){
			$('.project-carousel .owl-item').hide();
			$(selector).closest('.project-carousel .owl-item').show();
		}, 300);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Projects Modal
	-------------------------------------------------------------------------------*/



  var data = [
    {
      username: "Brad Frost", // Key "username" means that Magnific Popup will look for an element with class "mfp-username" in markup and will replace its inner HTML with the value.      
      userWebsite_href: 'http://www.bradfrostweb.com', // Key "userWebsite_href" means that Magnific Popup will look for an element with class "mfp-userWebsite" and will change its "href" attribute. Instead of ending "href" you may put any other attribute.      
      userAvatarUrl_img: 'images/projects/residential-ek-sao-paulo.jpg', // Prefix "_img" is special. With it Magnific Popup finds an  element "userAvatarUrl" and replaces it completely with image tag.      
      userLocation: 'Pittsburgh, PA'
    },
    
    {
      username: "Paul Irish",
      userWebsite_href: 'http://paulirish.com',
      userAvatarUrl_img: 'https://si0.twimg.com/profile_images/2910976341/7d972c32f3882f715ff84a67685e6acf_bigger.jpeg',
      userLocation: 'San Francisco'
  
    },
    
    {
      username: "Chris Coyier",
      userWebsite_href: 'https://css-tricks.com',
      userAvatarUrl_img: 'https://si0.twimg.com/profile_images/1668225011/Gravatar2_bigger.png',
      userLocation: 'Palo Alto, California'
    }
  ];
  




 






	$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    items: data,
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    fixedContentPos: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    inline: {
      markup: '<div id="project1" class="container zoom-anim-dialog"><div class="mfp-close"></div>'+
      '<div class="row">'+
      '    <div class="col-lg-8"><img alt="" class="project-detail-img" src="images/projects/residential-ek-sao-paulo.jpg"></div>'+
      '    <div class="col-lg-4">'+
      '      <h3 class="project-detail-title">RESIDENTIAL AD SÃO PAULO</h3>'+
      '      <ul class="project-detail-list text-dark">'+                                    
      '        <li>'+
      '          <span class="left">Project Type:</span>'+
      '          <span class="right">Residence</span>'+
      '        </li>'+
      '        <li>'+
      '          <span class="left">Architects:</span>'+
      '          <span class="right">Mari Ani Oglouyan</span>'+
      '        </li>'+
      '      </ul>'+
      '      <div class="project-detail-meta">'+
      '        <span class="left text-dark hidden-xs pull-sm-left">Share:</span>'+
      '        <div class="social-list pull-sm-right">'+
      '            <a href="https://www.instagram.com/_clamom_/" class="icon ion-social-instagram"></a>'+
      '            <a href="https://www.facebook.com/pg/clamommoveis/about/?ref=page_internal" class="icon ion-social-facebook"></a>'+
      '            <a href="https://www.linkedin.com/company/clamom/" class="icon ion-social-linkedin"></a>'+
      '        </div>'+
      '      </div>'+
      '    </div>'+
      '  </div>'+
      '</div>'
      
    },
    gallery: {
      enabled: true 
    },
    callbacks: {
      markupParse: function(template, values, item) {
        console.log("teste");
        console.log(values);
      }
    }
  });

     



	/*-------------------------------------------------------------------------------
	  Page Piling - Full Screen Sections 
	-------------------------------------------------------------------------------*/



    if ($('.pagepiling').length > 0){



		/* Page Piling Init */



      	$('.pagepiling').pagepiling({
    		scrollingSpeed: 280,
		    menu: '.menu-pagepiling',
		    anchors: ['main', 'about', 'projects', 'partners', 'testimonials', 'contacts'],
		    afterLoad: function(anchorLink, index){
		    	if ($('.pp-scrollable:nth-child(' + (index) + ')').hasClass(('section-white'))){ 
		            $('.navbar').removeClass('navbar-white');
		            $('#pp-nav').removeClass('white');
		            $('.copy-bottom').removeClass('white');
		            $('.lang-bottom').removeClass('white');
		    	}
		    	else{
	            	$('.navbar').addClass('navbar-white');
	            	$('#pp-nav').addClass('white');
	            	$('.copy-bottom').addClass('white');
		            $('.lang-bottom').addClass('white');
	            }
	            
  			}
		});


		/* Hide Mobile Menu On Anchor Click*/



		
			$('.menu-pagepiling ul li a').on('click', function() { 
		   	   hideMenu();
		    });	
		




		/* Scroll Navbar Into Sections  */



		$('.pp-scrollable').on('scroll', function () {
			var scrollTop =$(this).scrollTop();
			if (scrollTop > 0 ) {
				$('.navbar-2').removeClass('navbar-white');
			}
			else{
				$('.navbar-2').addClass('navbar-white');
			}
		});



		/* Add Arrows On Navigation  */



		$('#pp-nav').prepend('<div class="pp-nav-up icon-chevron-up"></div>').append('<div class="pp-nav-down icon-chevron-down"></div>').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});
	} 



    /*-------------------------------------------------------------------------------
	  Change Bacgkround On Project Section
	-------------------------------------------------------------------------------*/



    $('.project-box').on('mouseover',function(){
    	var index = $('.project-box').index(this);
    	$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });



	

})(jQuery);


