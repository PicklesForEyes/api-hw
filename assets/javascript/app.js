$(document).ready(function() {
  
  var buttons = ['java', 'coffee', 'espresso'];

  for(var i = 0; i < buttons.length; i++) {
    var btn = $('<button>'+ buttons[i] + '</button>');
      btn.attr('data-value', buttons[i]);
      // btn.text(buttons[i]);
      btn.addClass('btn btn-success');
    $('#button-display').append(btn);
  }

})