

$(document).ready(function() {     

    // get the URL for using in code later
    current_location = window.location.href;
    var current_language = "fr";
    if(current_location.indexOf("en/") != -1) {
        current_language = "en";
    }
    //console.log(current_language);
    
  

    // home page carousel
    
    if($(".flavor-carousel").length > 0) {
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters        
        
            init: false,
            initialSlide: 0,
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            speed: 500,
            observer: true,        

            autoplay: {
                delay: 6000,
            },        
            
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            zoom: {
                maxRatio: 1.2,
                minRatio: 1,
            },

            breakpoints: {
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    zoom: {
                        maxRatio: 1.2,
                        minRatio: 1,
                    },
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    zoom: {
                        maxRatio: 1.2,
                        minRatio: 1,
                    },
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    zoom: {
                        maxRatio: 1.2,
                        minRatio: 1,
                    },                
                    slideToClickedSlide: true,
                    allowTouchMove: false
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        });

        mySwiper.on('init', function() {
            //mySwiper.slideTo(0);   
            mySwiper.zoom.in();
            //$('.swiper-slide-active button').delay( 400 ).fadeIn( 200 );
        });
        // init Swiper
        mySwiper.init();

        mySwiper.on('slideChangeTransitionStart', function (e) {            
            mySwiper.zoom.out();
        });
        
        mySwiper.on('slideChangeTransitionEnd', function (e) {
            if (mySwiper.zoom.scale == 1) {
                mySwiper.zoom.in();
            }
            var curIndex = $('.swiper-slide-active').data('swiper-slide-index');
            //console.log(curIndex);
            //console.log($('.swiper-slide-active img').attr('title'));
            var curImageTitle = $('.swiper-slide-active img').attr('title');
            //var curImageLink = $('.swiper-slide-active img').attr('data-link');
            // they decided to link to flavor page instead of external Buy Now page
            var curImageLink = $('.swiper-slide-active img').attr('data-page');

            if (current_language == "es") {
                //curImageLink = "es/" + curImageLink;
            }
            
            $('.carousel-product-label h4').text(curImageTitle);
            $('.carousel-product-action a').attr('href',curImageLink);      
            //carouselLocateButton.attr('href', locatorURL);    
            
            //$('.swiper-slide-active button').delay( 400 ).fadeIn( 200 );
            //$('.swiper-slide-active button').show();
        });
        mySwiper.on('transitionEnd', function (e) {
            
        });

        if (mySwiper.autoplay.running) {

            // stop the autoplay until user scrolls down to section
            mySwiper.autoplay.stop();

            // added this to know when the carousel section is in view to begin the autoplay
            $(window).scroll(function(){
                // This is then function used to detect if the element is scrolled into view
                function elementScrolled(elem)
                {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
                }
            
                // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
                if(elementScrolled('.flavor-carousel .swiper-wrapper')) {
                    mySwiper.autoplay.start();
                    //console.log('cans in view');
                }
            });
        }

    } // home page carousel ends  
    
    
    // flavor page carousel
    if($(".flavor-page-carousel").length > 0) {
        var flavorSwiper = new Swiper ('.swiper-container', {
            // Optional parameters        
        
            init: true,
            initialSlide: 0,
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
            speed: 500,
            autoplay: {
                delay: 4000,
            },        
            
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },          

            breakpoints: {
                500: {
                    slidesPerView: 2,
                    spaceBetween: 20                    
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,                   
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 0,                                  
                    slideToClickedSlide: false,
                    allowTouchMove: false
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        }); 
        

    } // flavor page carousel ends 





    // variety page carousel
    if($(".variety-page-carousel").length > 0) {
        var varietySwiper = new Swiper ('.swiper-container', {
            // Optional parameters        
       
        init: true,
        initialSlide: 0,        
        slidesPerView: 1,
        spaceBetween: 20,        
        loop: false,
        autoplay: {
            delay: 4000,
        },   
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
       
        breakpoints: {
            200: {
                slidesPerView: 1,
                initialSlide: 0,
                spaceBetween: 20,
                speed: 500,                
                centerInsufficientSlides: false,      
                centeredSlides: true                               
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: false               
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 90,
                allowTouchMove: false,
                autoplay: false,                
                centerInsufficientSlides: false,  
                centeredSlidesBounds: true,    
                centeredSlides: false
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
            
        }); 
        

    } // flavor page carousel ends
    

});