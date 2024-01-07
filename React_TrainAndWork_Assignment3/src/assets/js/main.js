(function ($) {
 "use strict";

  /*----------------------------------------
                Bootstrap dropdown               
        -------------------------------------------*/

    // Add slideDown animation to Bootstrap dropdown when expanding.

    $('.dropdown').on('show.bs.dropdown', function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });


/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
    new WOW().init();
/*----------------------------
 mobile menu  active
------------------------------ */
    
    jQuery('.mobile-menu-start').meanmenu();
    
/*----------------------------
 owl active product area
------------------------------ */  
  $(".tab-carousel-start").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,
    margin:30,  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
    nav:true,
    dots:false,
	  navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:3,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        }
    }
      
  });
/*----------------------------
 owl active small product area
------------------------------ */  
  $(".tab-carousel-two-start").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,
    margin:30, 	  
      items : 3,
      nav:true,
      dots:false,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
  });
/*----------------------------
 owl active client area
------------------------------ */  
  $(".client-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,
    margin:30, 	  
      items : 6,
      nav:true,
      dots:false,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        480:{
            items:2,
        },
        576:{
            items:3,
        },
        768:{
            items:4,
        },
        992:{
            items:5,
        }
    }
  });
/*----------------------------
 owl active blog area
------------------------------ */  
  $(".blog-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,
    margin:30, 	  
      items : 4,
      nav:true,
      dots:false,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
  });
/*----------------------------
 owl active single product sidebar area
------------------------------ */  
  $(".sidebar-product").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
      nav:true,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  });
/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 0,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " to $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " to $" + $( "#slider-range" ).slider( "values", 1 ) );  
/*----------------------------
 zoom active
------------------------------ */  
      $("#zoom1").elevateZoom({
        gallery:'gallery_01', 
        cursor: 'pointer', 
        galleryActiveClass: "active", 
        imageCrossfade: true
        });
	   /*----------------------------
     zoom carousel active
------------------------------ */ 
    $(".zoom-slider").owlCarousel({
        nav: true,
       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items :4,
        });
/*----------------------------
    related product carousel
------------------------------ */ 
    $(".related-pro-carousel").owlCarousel({
        autoPlay: false, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,
      margin:30,  
        items : 4,
        /* transitionStyle : "fade", */    /* [This code for animation ] */
      nav:true,
      dots:false,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          480:{
              items:3,
          },
          576:{
              items:2,
          },
          768:{
              items:3,
          },
          992:{
              items:4,
          }
      }
        });
/*--------------------------
    scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   

    
 
})(jQuery); 