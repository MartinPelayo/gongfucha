'use-strict';

// nav script
$(function() {
  $('#teapot-logo-div').on('click', function() {
    var $nav = $('nav');
    $nav.toggle('slow');
    $('#teapot-logo-div').toggleClass('rotate');
  });
});
