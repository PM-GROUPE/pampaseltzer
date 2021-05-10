// ===================================
// Home Page animate elements function
// ===================================

var $animationElements = $('.animation-element-container');
var $window = $(window);

// get the URL for using in code later
current_location = window.location.href;
var current_language = "en";
if(current_location.indexOf("es/") != -1) {
  current_language = "es";
}

// show static wave image instead of video on iPhone because of play button bug when low batt
// var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
// if (iOS) {
//   $(".static-wave").css("z-index", "2");
// }

function checkIfInView() {

  var windowHeight = $window.height();
  var windowTopPosition = $window.scrollTop();
  var windowBottomPosition = (windowTopPosition + windowHeight);
  var footer = false;

  $.each($animationElements, function() {

    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);

    // Check - if this current container is within viewport
    if( (elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition) ) {
      $element.addClass('in-view');
    }

  });

}

// Initiate
function checkIfInViewInit() {

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
  
}
// =======================================
// End Home Page animate elements function
// =======================================



// DOCUMENT READY
(function() {  

  $('a[href*="#"]').on("click", function() {

    if ($(this).attr('href') != '#') {
      var url = $(this).attr('href'), idx = url.indexOf("#");
      var tag = idx != -1 ? url.substring(idx+1) : '';

      $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: $('#' + tag).offset().top -80
      }, 500);

      window.history.pushState(tag, tag, url);

      // UPDATED VERSION TO BE TESTED
      // window.location.hash = tag;

      return false;
    }

  });

  
  "use strict";

  //settings
  var settings = {          
      youtube_id: "hK3F1snU0Tw",
      fallback_flavor: "%-65536-%"
  }

  

  // Accordion for faqs
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
  }

  var $locatorResults = $('.main-locator-results');

  $locatorResults.hover(function(e) {
    if($(this).find('.location').length) {
      $(this).addClass('main-locator-results-active');
    }
  }, function() {
    $(this).removeClass('main-locator-results-active');
  });

  //function to create slugs from strings
  function slugify(text)
  {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  // Validation function for forms
  var validate = function(type,value){

      if (type === 'required'){
        if (value === ''){ return false; }
      }

      if (type == 'email'){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,15})+$/.test(value)) { return (true); }
        return false;
      }

      if (type == 'zip'){
        if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)) { return (true); }
        return false;
      }

      if (type == 'birthday'){
        return isDate($.trim(value));
      }

      return true;
  };

  // Function to initialise and validate inputs
  var input = function(form,attrs) {

    var _input = {
      el: document.getElementById(attrs.id),
      attrs: attrs,
    };

    _input.init = function(){
      form.registerInput(_input);
      _input.el.addEventListener('blur',function(){
        if (_input.valid()){
          // _input.el.nextElementSibling.classList.remove('show');
        } else {
          // _input.el.nextElementSibling.classList.add('show');
        }
      });
      return _input;
    };

    _input.valid = function(){
      var isValid = true;
      _input.attrs.validation.forEach(function(type) {
          if (!validate(type,_input.el.value)){
            isValid = false;
          }
      });
      return isValid;
    };

    return _input.init();

  };

  var $currentHash = "#";
  var $blocksArr = $('section');

  $(document).scroll(function () {

    var $currentTop = window.pageYOffset / 1;
    $blocksArr.each(function(i, val) {

      var $currentElementTop = $(this).offset().top - 120;
      var $hash = $(this).data('link'); // console.log('$hash: ' ,  $hash);

      if ($currentElementTop < $currentTop && $currentTop < $currentElementTop + $(this).height() && $currentHash != $hash) {
        if (history.pushState) {
          history.pushState(null, null, '#' + $hash);
          return false;
        } else {
          location.hash = '#' + $hash;
        }
          $currentHash = $hash;
      }
    });

  });  

})(); 



$(".find-white-claw a").on('click',function(event) { 
  event.preventDefault();
  var selectedFlavor = $("#flavor-finder-select").children("option:selected").val();
  if (current_language == "es") {
    var target_link = "https://locator.whiteclaw.com/es/"+selectedFlavor+"?ag=false";
  }
  else {
    var target_link = "https://locator.whiteclaw.com/"+selectedFlavor+"?ag=false";
  }
  window.location = target_link;
});



// Gets the video src from the data-src on a link or button  
var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0" );
    $(".inline-video").css("z-index", "2");
});