$(document).ready(function() {
  
  var buttons = ['java', 'coffee', 'espresso'];

  for(var i = 0; i < buttons.length; i++) {
    var btn = $('<button>');
      btn.attr('data-value', buttons[i]);
      btn.text(buttons[i]);
      btn.addClass('btn btn-success');
    $('#button-display').append(btn);
  }

  $('#submit').on('click', function(event) {
    event.preventDefault();

  })

  // need ajax request

  // need api format

  // need input added to buttons arr

  // need to append new buttons

})