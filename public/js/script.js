// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);

  var $contact_form = $('.contact-form');
  var $contact_button = $contact_form.find('.form-submit');
  var contact_action = 'https://getform.io/f/911b5949-eec3-490d-b066-12f5bff36306';

  $contact_form.removeClass('hidden');

  // Wait for a mouse to move, indicating they are human.
    $('body').on('mousemove', function () {
      // Unlock the form.
      $contact_form.attr('action', contact_action);
      $contact_button.first().removeAttr('disabled');
    });

    // Wait for a touch move event, indicating that they are human.
    $('body').on('touchmove', function () {
      // Unlock the form.
      $contact_form.attr('action', contact_action);
      $contact_button.first().removeAttr('disabled');
    });

    // A tab or enter key pressed can also indicate they are human.
    $('body').on('keydown', function (e) {
      if ((e.keyCode === 9) || (e.keyCode === 13)) {
        // Unlock the form.
        $contact_form.attr('action', contact_action);
        $contact_button.first().removeAttr('disabled');
      }
    });

    // Mark the form as submitted.
    $contact_button.on('click', function () {
      $contact_form.addClass('js-submitted');
    });  


});